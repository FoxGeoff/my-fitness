import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      mail: new FormControl('', { }),
      password: new FormControl('', { })
    })

  onSubmit(form: Form) {

  }

}
