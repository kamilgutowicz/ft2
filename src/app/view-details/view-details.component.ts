import { Component, OnInit } from '@angular/core';
import { ViewDetailsService } from './view-details.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  public bookings = [];
  public localStorageBookings = [];
  public serverErrMsg = "";

  constructor(private _viewDetailsService : ViewDetailsService) { }

  ngOnInit(): void {
    this._viewDetailsService.getAllBookings().subscribe((data) => {this.bookings = data});;
    this.localStorageBookings = this._viewDetailsService.getAllBookingLocalStorage();
  }

  deleteRow(bookingId: number) {
    this._viewDetailsService.deleteBooking(bookingId);
    this._viewDetailsService.getAllBookings().subscribe((data) => {this.bookings = data});
  }

  deleteLocalStorageBooking(bookingId: number){
    console.log(bookingId);
    this._viewDetailsService.removeLocalStorageBooking(bookingId);
    this.localStorageBookings = this._viewDetailsService.getAllBookingLocalStorage();
  }

  removeItemFromArray(index) {
    if(index > -1){
      this.bookings.splice(index, 1);
    }
  }
}