import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Post} from "../models/post";
import {Categoria} from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private urlEndPoint: string = 'http://localhost:8080/api/subreddit';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage["user"]).token
  })

  constructor(private http: HttpClient) {
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post(this.urlEndPoint + '/save', categoria, {headers: this.httpHeaders});
  }
  getAllCate():Observable<Categoria[]>{
    return this.http.get(this.urlEndPoint+'/all',{headers: this.httpHeaders}).pipe(map(Response => Response as Categoria[]))
  }
  getid(id:number):Observable<Categoria>{
    return this.http.get(this.urlEndPoint+"/"+id,{headers: this.httpHeaders}).pipe(map(Response => Response as Categoria))
  }

}
