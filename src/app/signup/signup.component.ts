import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {

  
   form: FormGroup | any

  constructor() { }

  ngOnInit(): void {
    
    // this.form = new FormGroup({
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   username: new FormControl(null, [Validators.required])
    // })
  }


}
