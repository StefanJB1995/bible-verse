import { Component, OnInit } from '@angular/core';
import { Pill } from '../model/Pill';
import { PillService } from '../service/pill-service';

@Component({
  selector: 'app-pill-tracker',
  templateUrl: './pill-tracker.component.html',
  styleUrls: ['./pill-tracker.component.scss']
})
export class PillTrackerComponent implements OnInit {

  pillList: Pill[] = []; 

  constructor(private service:PillService) {}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.getAllPills().subscribe(
      response => {
        this.pillList = response;
      }
    )
  }

}
