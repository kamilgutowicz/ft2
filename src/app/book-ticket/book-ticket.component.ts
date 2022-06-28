import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BookTicketService } from './book-ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})

export class BookTicketComponent implements OnInit {

  registerForm : FormGroup;
  booking: any = {};
  errorMessage: string;
  successMessage: string;

  constructor(private formBuilder: FormBuilder, private bookTicketService : BookTicketService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      passengerName: ['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      noOfTickets: ['', [Validators.required, Validators.min(1)]],
      flightId: ['', [Validators.required, Validators.pattern("^([A-Za-z]{2})([0-9]{4,6})$")]]
    });
  }

  bookingSubmit() {

    this.errorMessage = null;
    this.successMessage = null;

    var val = Math.floor(1000 + Math.random() * 9000);
    const ticketAmount = 250;

    console.log(this.registerForm.value);
    if(this.registerForm.valid){      
      this.registerForm.value['bookingId'] = val;
      this.registerForm.value['amount'] = ticketAmount * this.registerForm.value['noOfTickets'];
      this.bookTicketService.addBooking(this.registerForm.value);

      this.successMessage = "Booked Successfully!";
      this.registerForm.reset();
    } else {
      this.errorMessage = "Error occured!";
    }
  }
}