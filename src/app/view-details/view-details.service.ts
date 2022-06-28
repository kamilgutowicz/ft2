import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { booking } from './booking';
import { Observable } from 'rxjs';
import bookings from "../../assets/data/bookings.json";

@Injectable({
  providedIn: 'root'
})

export class ViewDetailsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  private _url : string = "../assets/data/bookings.json";

  constructor(private http : HttpClient) { }

  getAllBookings() : Observable<booking[]> {
    return this.http.get<booking[]>(this._url);
  }

  getAllBookingLocalStorage(): any {
    if(localStorage.getItem('Bookings')) {
      return JSON.parse(localStorage.getItem('Bookings'));
    } else {
      return [];
    }
  }

  deleteBooking(bookingId) {
    console.log("---Bookings from Static JSON---");

    let staticbookings = bookings.filter((item)=> item.bookingId !== bookingId);
    console.log(staticbookings);
  }

  removeLocalStorageBooking(bookingId) : void{
    let localBookings = this.getAllBookingLocalStorage();
    localBookings= localBookings.filter((item) => item.bookingId !== bookingId)
    this.updateBooking(localBookings);
  }

  updateBooking(localBookings){
      localStorage.setItem('Bookings', JSON.stringify(localBookings));
  }

}