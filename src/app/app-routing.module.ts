import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'bookticket', component: BookTicketComponent },
  { path: 'viewdetails', component: ViewDetailsComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }