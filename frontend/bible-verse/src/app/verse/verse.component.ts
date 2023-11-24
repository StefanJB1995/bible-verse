import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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
export class VerseComponent {

}
