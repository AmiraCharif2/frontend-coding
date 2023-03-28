import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface DateAge {
    date: string
    age: number
}

export interface Person {
    gender: 'female' | 'male' | 'neutra'
    name: {
        title: string
        first: string
        last: string
    }
    location: {
        street: {
            number: number | string
            name: string
        }
        city: string
        state: string
        country: string
        postcode: number | string
        coordinates: {
            latitude: number | string
            longitude: number | string
        }
        timezone: {
            offset: number | string
            description: string
        }
    }
    email: string
    dob: DateAge
    registered: DateAge
    phone: string
    cell: string
    id: {
        name: string
        value: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    nat: string
}

export interface IpageResult {
    info: {
        page: number
        results: number
        seed: string
        version: string
    }
    results: Array<Person>
}

@Injectable({
    providedIn: 'root',
})
export class SpeakerService {
    constructor(private http: HttpClient) {}

    getAllSpeakers(
        pageNumber: number,
        resultsPerPage: number
    ): Observable<IpageResult> {
        return this.http.get<IpageResult>(
            `https://randomuser.me/api/?results=${resultsPerPage}&page=${pageNumber}`
        )
    }
}
