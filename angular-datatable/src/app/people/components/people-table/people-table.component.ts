import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PersonData } from '../../interfaces/person-data';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})

export class PeopleTableComponent implements OnInit {  
  
  displayedColumns = ['email','firstName', 'lastName', 'primaryGroup', 'phoneNumber', 'hoursStudied'];
  dataSource: MatTableDataSource<PersonData>;
  
  @Input() peopleList: PersonData[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() { }
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.peopleList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
