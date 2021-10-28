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
    
     this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-z]{2,12}+$')]),
      surname: new FormControl(null, [Validators.required, Validators.pattern('^[a-z]{2,16}+$')]),
      email:  new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      username: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9_-]{8,15}$')])
       
     })
  }


}
