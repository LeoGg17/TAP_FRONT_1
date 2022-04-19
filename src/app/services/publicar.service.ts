import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CommentRequest, Post} from "../models/post";
import {Image} from "../models/image";

@Injectable({
  providedIn: 'root'
})
export class PublicarService {
  private urlEndPoint:string='http://localhost:8080/api/post';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+JSON.parse(sessionStorage["user"]).token})

  constructor(private http: HttpClient) { }
  getAllPosts():Observable<Post[]>{
    return this.http.get(this.urlEndPoint+'/all',{headers: this.httpHeaders}).pipe(map(Response => Response as Post[]))
  }


  createPost(post: Post): Observable<Post> {
    return this.http.post(this.urlEndPoint+'/save', post ,{headers:this.httpHeaders});
  }

  getPost(id?: Number): Observable<Post> {
    return this.http.get<Post>(this.urlEndPoint+'/'+id,{headers:this.httpHeaders});
  }
  update(post: Post):Observable<Post>{
    console.log(post);
    return this.http.put<Post>(this.urlEndPoint+'/comentario',post,{headers: this.httpHeaders})
  }

  updatemiCuento(post: Post): Observable<Post>{
    console.log(post);
    return this.http.put<Post>(this.urlEndPoint,post,{headers: this.httpHeaders})
  }


  updatessss(post: Post,id:Number): Observable<Post> {
    console.log(Post);
    // @ts-ignore
    return this.http.put<Post>(this.urlEndPoint+"/"+id+"/comentar", post.comentarios,{headers: this.httpHeaders})
  }


  getcuentobyid(id?:Number):Observable<Post>{
    return this.http.get(this.urlEndPoint+"/"+id,{headers: this.httpHeaders}).pipe(map(Response => Response as Post))
  }

  deleteCuento(id?: Number){
    return this.http.delete<Post>(this.urlEndPoint+'/'+id,{headers: this.httpHeaders})
  }

}

