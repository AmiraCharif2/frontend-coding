import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AllSpeakersComponent } from './speaker/all-speakers/all-speakers.component';
import { SpeakerDetialsComponent } from './speaker/speaker-detials/speaker-detials.component';
import { SpeakerModule } from './speaker/speaker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipePipe,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpeakerModule,
    MaterialModule
   
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
