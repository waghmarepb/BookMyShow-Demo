import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css']
})
export class ShowmovieComponent implements OnInit {
  sitChoice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  movieName = ['Mission Mangal', 'Section 375', 'Dream girl']

  public selected: boolean;
  bookedValue: any;

  constructor(private router: Router,
              private service: MovieserviceService) { }


  ngOnInit() {
    this.selected = false;
    this.service.get('api/getmovie').subscribe((res:any)=>{
      this.movieName=res;
      console.log(this.movieName);
    })
  }
  selecteSits( sits) {
    this.selected = true;
    this.bookedValue = sits;
  }

  selectedMovie(value) {
    console.log(value._id);
    const bookingData = {
      numberOfsits  : this.bookedValue,
      movieName     : value.movieName
    };

    localStorage.setItem('data', JSON.stringify(bookingData));
    this.router.navigate(['/bookshow/'+value._id]);
  }
}
