import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FaceInfo } from "../interfaces/FaceInterface"
import { Observable } from '../../../node_modules/rxjs/Observable';
import { FaceDetectionService } from '../services/faceDetection.service';
//https://x-team.com/blog/webcam-image-capture-angular/

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  url: string = "http://172.21.1.122:8080/stream/camera-1";
  info : FaceInfo;
  @ViewChild("video")
  public video: ElementRef;
  
  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor(private _svc: FaceDetectionService){
    this.captures = [];
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(){
    //this.video.nativeElement.src = this.url;
    //this.video.nativeElement.play();
  }
  
  public capture(){
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);

    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.GetFace();
  }

  GetFace(): void{
    this._svc.detectFace(this.captures[0]).subscribe(result =>{
      this.info = result;
      console.log(this.info);
    })
  }
}