import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-login',
  templateUrl: './reactive-form-login.component.html',
  styleUrls: ['./reactive-form-login.component.scss']
})
export class ReactiveFormLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  empattern ="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  LoginForm= this.formBuilder.group({
    email:['',[Validators.required,Validators.pattern(this.empattern)]],
    password:['',[Validators.required ,Validators.minLength(8)]],
  })

  get email(){
    return this.LoginForm.get('email');
  }
  get password(){
    return this.LoginForm.get('password');
  }
}

