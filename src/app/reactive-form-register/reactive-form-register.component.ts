import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidators, ForbiddenNameValidator } from '../SharedClassesAndTypes/validate';

@Component({
  selector: 'app-reactive-form-register',
  templateUrl: './reactive-form-register.component.html',
  styleUrls: ['./reactive-form-register.component.scss']
})
export class ReactiveFormRegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  social:string[] =['Facebook','Twitter','Google'];
  empattern ="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  registerationForm = this.formBuilder.group({
    userName: ['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
    email:['',[Validators.required,Validators.pattern(this.empattern)]],
    password:['',[Validators.required ,Validators.minLength(8)]],
    confirmPassword: ['']
  },{
    validator:[ConfirmPasswordValidators]
  })

  ngOnInit(): void {
  }
  get userName (){
    return this.registerationForm.get('userName');
  }
  get email(){
    return this.registerationForm.get('email');
  }
  get password(){
    return this.registerationForm.get('password');
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword');
  }

}
