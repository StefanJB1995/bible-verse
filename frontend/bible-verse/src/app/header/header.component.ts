import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../service/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  user = JSON.parse(sessionStorage.getItem('user') || '{}');
  

  constructor(public service: UserService) { }

  ngOnInit(): void {
    console.log(this.user.username)
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.service.logout();
  }
}
