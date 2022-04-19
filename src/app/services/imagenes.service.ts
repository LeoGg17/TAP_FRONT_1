import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Post} from "../models/post";
import {Image} from "../models/image";

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+JSON.parse(sessionStorage["user"]).token})

  private urlEndPoint: string = 'http://localhost:8080/check/upload';


  constructor(private http: HttpClient) {
  }


  createPost(image: FormData): Observable<Image> {
    return this.http.post(this.urlEndPoint + '', image, {headers: this.httpHeaders});
  }
}
