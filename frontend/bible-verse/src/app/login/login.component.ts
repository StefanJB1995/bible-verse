import { Component } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: User = {
    id: 0,
    username: "",
    password: "",
    isAdmin: 0,
    isSpecial: 0
  }

  errorMessage = "";
  username = "";
  password = "";
  invalidLogin = false;

  constructor(private service: UserService, private router: Router) { }

  handleLogin() {
    console.log(this.username);
    this.user.username = this.username;
    this.user.password = this.password;

    this.service.loginUser(this.user).subscribe(data => {
      if (data != null) {
        this.user = data;
        this.user.password = "";
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl("/")
      }
      else {
        this.errorMessage = "Invalid Credentials";
      }
    },
      error => {
        console.log(error)
       
      });

    console.log(this.user);


  }

}
