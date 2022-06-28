import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BookTicketService } from './book-ticket/book-ticket.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewDetailsService } from './view-details/view-details.service';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';
import { ErrorDialogService } from './error-dialog/errordialog.service';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertifyService } from './interceptor/alertify.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BookTicketComponent,
    ViewDetailsComponent,
    HomepageComponent,
    ErrorDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    FormsModule
  ],
  providers: [BookTicketService, ViewDetailsService, ErrorDialogService, AlertifyService, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }