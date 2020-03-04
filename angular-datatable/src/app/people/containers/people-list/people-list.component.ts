import { Component, OnInit, ViewChild } from '@angular/core';

import { PersonData } from './../../interfaces/person-data';
import { PeopleDataService } from '../../services/people-data.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})

export class PeopleListComponent implements OnInit {
   peopleList: PersonData[] = [];
  
  constructor(private peopleDataService: PeopleDataService) {

  }

  ngOnInit(): void {
    this.peopleList = this.peopleDataService.getPeopleData();
  }

}
