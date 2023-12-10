import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTrackerComponent } from './pill-tracker.component';

describe('PillTrackerComponent', () => {
  let component: PillTrackerComponent;
  let fixture: ComponentFixture<PillTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PillTrackerComponent]
    });
    fixture = TestBed.createComponent(PillTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
