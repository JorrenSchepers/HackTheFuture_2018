import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StreamService{

    constructor(private http : HttpClient){ }

    getStreams() : Observable<IStreams>{
        return this.http.get<IStreams>("http://172.21.1.122:8080/stream")
    }
}

export interface IStreams {
    streams: string[];
}