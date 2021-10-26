import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  // form: FormGroup

  constructor() { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   username: new FormControl(null, [Validators.required])
    // })
  }

}
