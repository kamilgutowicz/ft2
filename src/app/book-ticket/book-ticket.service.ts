import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookTicketService {

  constructor() { }

  addBooking(booking) {
    let bookings = [];

    if(localStorage.getItem('Bookings')){
      bookings = JSON.parse(localStorage.getItem('Bookings'));
      bookings = [...bookings, booking];
    } else {
      bookings = [booking];
    }
    
    localStorage.setItem('Bookings', JSON.stringify(bookings));
  }
}
