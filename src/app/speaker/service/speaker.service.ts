import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Person
  {
    "gender": "female",
    "name": {
      "title": "Mrs",
      "first": "Viktorija",
      "last": "Rašić"
    },
    "location": {
      "street": {
        "number": 8595,
        "name": "Vogovska"
      },
      "city": "Kuršumlija",
      "state": "Nišava",
      "country": "Serbia",
      "postcode": 51145,
      "coordinates": {
        "latitude": "-76.2708",
        "longitude": "-96.2744"
      },
      "timezone": {
        "offset": "-2:00",
        "description": "Mid-Atlantic"
      }
    },
    "email": "viktorija.rasic@example.com",
    "login": {
      "uuid": "f8b3dda1-cbdc-4334-94db-6427e882b6ad",
      "username": "heavybird603",
      "password": "sammie",
      "salt": "uZ4uKVVm",
      "md5": "1ede3de2e814f6a9cc6420243ae7d9ce",
      "sha1": "b23013562e9a5c3ef32abc2c1bb80683c9b79956",
      "sha256": "2cefb4e929519ad2178c82e2a493f3db5d0ca7fc478f86a471b39bb30e67d784"
    },
    "dob": {
      "date": "1997-11-20T19:40:38.815Z",
      "age": 25
    },
    "registered": {
      "date": "2007-10-08T17:57:18.641Z",
      "age": 15
    },
    "phone": "023-1497-570",
    "cell": "060-6141-061",
    "id": {
      "name": "SID",
      "value": "648768661"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/88.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
    },
    "nat": "RS"

 
}
export interface IpageResult{
  info:{
    page:number,
    results:number,
    seed:string,
    version:string
  }
  results:Array<Person>
}
@Injectable({
  providedIn: 'root'
})

export class SpeakerService {

  constructor(private http:HttpClient) { }

  getAllSpeakers():Observable<IpageResult>{
   return this.http.get<IpageResult>("https://randomuser.me/api/?results=20&page=1");

  }
  
 
  
}
