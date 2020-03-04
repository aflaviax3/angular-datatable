import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'people-list', 
    loadChildren: './people/people.module#PeopleModule'  
  },
  { 
    path: '', 
    redirectTo: '/people-list', 
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {   

}
