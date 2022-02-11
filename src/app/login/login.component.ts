import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../Services/login-register.service';
import { LoginForm } from '../SharedClassesAndTypes/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:LoginForm=new LoginForm ("","")

  constructor(private userlogin:LoginRegisterService) { }

  ngOnInit(): void {
  }

  loginBtn()
  {
    console.log(this.login)
    this.userlogin.LoginService(this.login).subscribe(res=>{
      console.log('login completed',res)
    },
    error=>{
      console.log('error logging in',error);
      

    });
    
  }
}
