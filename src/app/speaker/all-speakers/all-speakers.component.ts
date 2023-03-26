import { Component, OnInit } from '@angular/core';
import { IpageResult, Person, SpeakerService } from '../service/speaker.service';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-all-speakers',
  templateUrl: './all-speakers.component.html',
  styleUrls: ['./all-speakers.component.scss']
})
export class AllSpeakersComponent implements OnInit{
speakers!:Array<Person>
selectedValue! :string;
searchText :string ='';
constructor (private service:SpeakerService){}

ngOnInit(): void {
  this.getspeakers();
}
getspeakers(){
  this.service.getAllSpeakers().subscribe((res:IpageResult)=>{
    this.speakers=res.results;
 // console.log(res);
  })
}


}
 /*filterSpeakers(event:String){
   let value=event?.target.value;
 }*/


