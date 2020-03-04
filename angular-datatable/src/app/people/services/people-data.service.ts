import { Injectable } from '@angular/core';
import { PersonData } from '../interfaces/person-data';

@Injectable({
  providedIn: 'root'
})

export class PeopleDataService {
  
  /** Constants used to fill up our data base. */
  private GROUPS = ['important', 'work', 'school'];

  private FIRSTNAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

  private LASTNAMES = ['Castaneda', 'Williams', 'Bull', 'Coles', 'Whittaker', 'Rees',
  'Peters', 'Brewer', 'Goodwin', 'Russell', 'Rawlings', 'Singh',
  'Butler', 'Clark', 'Ward', 'Cross', 'Gilbert', 'Carlson', 'Tate'];

  private PHONES = ['303-555-0133', '303-555-0139', '303-555-0167', '303-555-0181', '303-555-0167', '303-555-0192'];

  constructor() { }

  getPeopleData(): PersonData[] {
    let people : PersonData[] = [];

    for (let i = 1; i <= 100; i++) { 
      people.push(this.createNewPerson()); 
    }

    return people;
  }
  
  private createNewPerson(): PersonData {
    const firstName =
    this.FIRSTNAMES[Math.round(Math.random() * (this.FIRSTNAMES.length - 1))];
    
    const lastName =
    this.LASTNAMES[Math.round(Math.random() * (this.LASTNAMES.length - 1))];
    
    const email = 
      lastName + '.' + firstName + '@gmail.com';

    return {
      email: email.toLowerCase(),
      firstName: firstName,
      lastName: lastName,
      primaryGroup: this.GROUPS[Math.round(Math.random() * (this.GROUPS.length - 1))],
      phoneNumber: this.PHONES[Math.round(Math.random() * (this.PHONES.length - 1))],
      hoursStudied: Math.round(Math.random() * 100)
    };
  }


}
