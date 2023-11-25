import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { VerseService } from '../service/verse-service';
import { Verse } from '../model/Verse';

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss'],
  animations: [
    trigger('slideIn', [
      state('void', style({ transform: 'translateY(-100%)' })),
      transition(':enter', [
        animate('1000ms ease-out', style({ transform: 'translateY(0%)' }))
      ])
    ])
  ]
})
export class VerseComponent implements OnInit {

  verse: Verse = {
    id: 0,
    chapter: "",
    verse: ""
  };

  constructor(private service: VerseService) { }
  ngOnInit(): void {
    this.service.getVerseById(1).subscribe(data => {
      this.verse = data;
      console.log(data);
    })
  }

}
