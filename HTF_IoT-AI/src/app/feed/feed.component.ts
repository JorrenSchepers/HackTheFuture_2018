import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//https://x-team.com/blog/webcam-image-capture-angular/

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  stream : string;
  url: string;
  @ViewChild("video")
  public video: ElementRef;
  
  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  public constructor(private route : ActivatedRoute){
    this.captures = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.stream = params['streamId'];
      this.url = `http://172.21.1.122:8080/stream/${this.stream}`;
  });
  }

  public ngAfterViewInit(){
    //this.video.nativeElement.src = this.url;
    //this.video.nativeElement.play();
  }
  public capture(){
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);

    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }
}