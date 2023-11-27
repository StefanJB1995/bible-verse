import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage = "Invalid Credentials";
  username = "";
  password = "";
  invalidLogin =false;

  handleLogin() {
    console.log(this.username);
  }

}
