import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { AllSpeakersComponent } from './speaker/all-speakers/all-speakers.component';

const routes: Routes = [
  {path:"allspeaker", component:AllSpeakersComponent},
  {path:"about" , component:AboutComponent},
  {path:"**", redirectTo:"allspeaker",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
