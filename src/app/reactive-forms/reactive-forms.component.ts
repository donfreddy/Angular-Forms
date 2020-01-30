import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl ('', [
      Validators.required, 
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
    ],
    [UsernameValidators.shouldBeUnique]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
