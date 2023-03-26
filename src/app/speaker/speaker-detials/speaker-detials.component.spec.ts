import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDetialsComponent } from './speaker-detials.component';

describe('SpeakerDetialsComponent', () => {
  let component: SpeakerDetialsComponent;
  let fixture: ComponentFixture<SpeakerDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
