import { Component, OnInit } from '@angular/core'
import { PageEvent } from '@angular/material/paginator'
import { IpageResult, Person, SpeakerService } from '../service/speaker.service'

@Component({
    selector: 'app-all-speakers',
    templateUrl: './all-speakers.component.html',
    styleUrls: ['./all-speakers.component.scss'],
})
export class AllSpeakersComponent implements OnInit {
    speakers!: Array<Person>
    filteredSpeakers!: Array<Person>
    selectedValue!: string
    searchText: string = ''

    page: number = 1
    pageSize: number = 10

    constructor(private service: SpeakerService) {}

    ngOnInit(): void {
        this.getspeakers()
    }

    getspeakers() {
        this.service
            .getAllSpeakers(1, this.pageSize)
            .subscribe((res: IpageResult) => {
                this.speakers = res.results
                this.filteredSpeakers = res.results
                // console.log(res);
            })
    }

    filterSpeakers(searchtext: string) {
        this.filteredSpeakers = this.speakers.filter((speaker) => {
            return (
                speaker.name.first.includes(searchtext) ||
                speaker.name.last.includes(searchtext) ||
                speaker.name.title.includes(searchtext)
            )
        })
    }

    handlePageEvent(event: PageEvent) {
        this.service
            .getAllSpeakers(event.pageIndex, event.pageSize)
            .subscribe((res: IpageResult) => {
                this.speakers = res.results
                this.filteredSpeakers = res.results
                // console.log(res);
            })
    }
}
