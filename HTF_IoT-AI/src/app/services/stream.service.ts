import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DepFlags } from '@angular/core/src/view';

@Injectable()
export class StreamService {
    private baseUrl = "http://172.21.1.122:8080/"

    constructor(private http: HttpClient) { }

    getStreams(): Observable<IStreams> {
        return this.http.get<IStreams>(`${this.baseUrl}stream`)
    }

    getDecipher(file: File) : Observable<IDeciphered> {
        var fd = new FormData;
        fd.append('image', file, file.name)
        return this.http.post<IDeciphered>(`${this.baseUrl}decipher`, fd)
    }
}

export interface IStreams {
    streams: string[];
}

export interface IDeciphered {
    deciphered: string
}

export interface IFile {
    image: any
}