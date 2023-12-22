import { Component, OnInit } from '@angular/core';
import { Pill } from '../model/Pill';
import { PillService } from '../service/pill-service';
import { UserService } from '../service/user-service';
import { User } from '../model/User';

@Component({
  selector: 'app-pill-tracker',
  templateUrl: './pill-tracker.component.html',
  styleUrls: ['./pill-tracker.component.scss']
})
export class PillTrackerComponent implements OnInit {

  pillList: Pill[] = []; 
  user: User = {
    id: 0,
    username: "",
    password: "",
    isAdmin: 0,
    isSpecial: 0
  }

  //user1: User = this.userService.getUser();

  constructor(private service:PillService, private userService: UserService) {}

  ngOnInit(): void {
    this.refreshList();
    this.user = this.userService.getUser();
    //console.log("user:", this.user)
  }

  refreshList() {
    this.service.getAllPills().subscribe(
      response => {
        this.pillList = response;
      }
    )
  }

  addDate() {
    
  }

}
