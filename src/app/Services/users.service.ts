import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, observable, throwError } from 'rxjs';

interface Iuser
{
  id:number;
  name:string;
  username:string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url:string="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }
  GetAllUsers():Observable<Iuser[]>
  {
    return this.http.get<Iuser[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message||"server error")
    }))
  }
}
