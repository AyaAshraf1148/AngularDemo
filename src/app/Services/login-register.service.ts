import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../SharedClassesAndTypes/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  _url:string="https://localhost:3000/login";
  constructor(private http :HttpClient) { }
  LoginService(login:LoginForm)
  {
    return this.http.post(this._url,login)
  }
  Registertion="https://localhost:3000/register/"
  RegisterService(login:LoginForm)
  {
    return this.http.post(this.Registertion,login)
  }
}
