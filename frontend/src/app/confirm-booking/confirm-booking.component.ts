import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {
  movie: any;

  constructor() { }
  resultData: any;
  ngOnInit() {
    this.resultData = JSON.parse(localStorage.getItem('confirmData'));
     this.movie = JSON.parse(localStorage.getItem('data'));
    console.log(this.movie);
  }

}
