import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpeakersComponent } from './all-speakers.component';

describe('AllSpeakersComponent', () => {
  let component: AllSpeakersComponent;
  let fixture: ComponentFixture<AllSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
