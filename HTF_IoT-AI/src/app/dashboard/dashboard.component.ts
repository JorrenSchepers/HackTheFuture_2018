import { Component, OnInit } from '@angular/core';
import { StreamService } from '../services/stream.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private streams : string[]
  private count : number
  private width : number

  constructor(private streamSvc : StreamService){}

  ngOnInit(){
    this.streamSvc.getStreams().subscribe(streams => this.streams = streams.streams);
    //this.streams = ["camera-1", "camera-1", "camera-1", "camera-1", "camera-1", "camera-1", "camera-1", "camera-1", "camera-1", "camera-1"]
    this.count = this.streams.length
    this.width  = 25 - (this.count % 3)
  }
}