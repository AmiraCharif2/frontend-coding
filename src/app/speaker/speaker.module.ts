import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSpeakersComponent } from './all-speakers/all-speakers.component';
import { SpeakerDetialsComponent } from './speaker-detials/speaker-detials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AllSpeakersComponent,
    SpeakerDetialsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  exports:[
    AllSpeakersComponent,
    SpeakerDetialsComponent

  ]
   
})
export class SpeakerModule { }
