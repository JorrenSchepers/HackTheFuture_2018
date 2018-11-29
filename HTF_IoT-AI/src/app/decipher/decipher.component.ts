import { Component } from '@angular/core';
import { StreamService, IFile } from '../services/stream.service'

@Component({
  selector: 'app-decipher',
  templateUrl: './decipher.component.html',
  //styleUrls: ['./decipher.component.scss']
})
export class DecipherComponent {
    private letters : string[] = [];
    private files : File[] = [];
    private file : File;

    constructor(private streamSvc : StreamService){}

    fileChanged(event){
        var reader = new FileReader;
        this.file = <File>event.target.files[0];
        console.log(this.file);
    }

    decipher(){
        if(this.file){
            var sent = false;
            for(var i = 0; i < this.files.length; i++){
                if(this.files[i].name === this.file.name) sent = true;
            }
            if(!sent){
                this.streamSvc.getDecipher(this.file).subscribe(result => {
                    console.log(result)
                    this.letters.push(result.deciphered)
                });
                this.files.push(this.file);
                console.log(this.files)
            }
            else alert("this file has already been sent");
        }
        else alert("no file selected")
    }
}
