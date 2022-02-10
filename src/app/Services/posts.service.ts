import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, observable, throwError } from 'rxjs';
import { Iposts } from '../SharedClassesAndTypes/Iposts';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  GetAllPosts():Observable<Iposts[]>
  {
    return this.http.get<Iposts[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"server error")
    }))
  }
}
