import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../SharedClassesAndTypes/validate';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  NotesForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.minLength(5), ForbiddenNameValidator(/admin|adminstrator/)]],
    check: [false],
    discount: [''],
    newComments: this.formBuilder.array([])
  });

  get Name() {
    return this.NotesForm.get('Name');
  }
  get discount() {
    return this.NotesForm.get('discount');
  }
  get newComments() {
    return this.NotesForm.get('newComments') as FormArray;
  }
  addnewComments() {
    this.newComments.push(this.formBuilder.control(''));
  }

  DiscountValids()
  {
    this.NotesForm.get('check')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        this.discount?.setValidators(Validators.required)
      }
      else
      {
        this.discount?.clearValidators();
      }
      this.discount?.updateValueAndValidity();
    })
  }


}