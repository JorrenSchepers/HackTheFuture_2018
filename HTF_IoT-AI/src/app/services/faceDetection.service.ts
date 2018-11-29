import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { FaceInfo } from "../interfaces/FaceInterface"

@Injectable()
export class FaceDetectionService{
    constructor(private _http: HttpClient){

    }
    endpoint : string = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=true"
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Ocp-Apim-Subscription-Key': '7c132a0c8f254dc1b6691a6026b8bdf1'
        })
    };

    detectFace(picture: any):Observable<FaceInfo>{
        return this._http.post<FaceInfo>(this.endpoint, picture ,this.httpOptions);
    }
}