import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AllSpeakersComponent } from './all-speakers/all-speakers.component'
import { SpeakerDetialsComponent } from './speaker-detials/speaker-detials.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '../material/material.module'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [AllSpeakersComponent, SpeakerDetialsComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [AllSpeakersComponent, SpeakerDetialsComponent],
})
export class SpeakerModule {}
