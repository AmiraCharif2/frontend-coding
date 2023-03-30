import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Person } from '../service/speaker.service'

import { AllSpeakersComponent } from './all-speakers.component'

describe('AllSpeakersComponent', () => {
    let component: AllSpeakersComponent
    let fixture: ComponentFixture<AllSpeakersComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AllSpeakersComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(AllSpeakersComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should have a title', () => {
        // we wont to test this method  -> void
        // if searchtext = "a" and this.speakers = [
        //    {name: {first = 'aaa', last: '', title: 'Miss'}},
        //    {name: {first = 'bbb', last: 'a', title: 'Mrs'}},
        //    {name: {first = 'bbb', last: 'b', title: 'Mrs'}}
        // ] then
        // this.filteredSpeakers = [
        //    {name: {first = 'aaa', last: '', title: 'Miss'}},
        //    {name: {first = 'bbb', last: 'a', title: 'Mrs'}}
        // ]

        var searchText = 'a'

        component.speakers = [
            { name: { first: 'aaa', last: '', title: 'Miss' } } as Person,
            { name: { first: 'bbb', last: 'a', title: 'Mrs' } } as Person,
            { name: { first: 'bbb', last: 'b', title: 'Mrs' } } as Person,
        ]

        component.filterSpeakers(searchText)

        expect(component.filteredSpeakers).toEqual([
            { name: { first: 'aaa', last: '', title: 'Miss' } } as Person,
            { name: { first: 'bbb', last: 'a', title: 'Mrs' } } as Person,
        ])

        expect(component.filteredSpeakers.length).toEqual(2)
    })
})
