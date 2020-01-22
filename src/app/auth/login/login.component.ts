import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
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

  }
  onSubmit(form: Form) {

  }

}
