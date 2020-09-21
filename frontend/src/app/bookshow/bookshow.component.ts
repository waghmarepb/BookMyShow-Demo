import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieserviceService } from '../movieservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bookshow',
  templateUrl: './bookshow.component.html',
  styleUrls: ['./bookshow.component.css']
})
export class BookshowComponent implements OnInit {
  bookingData: any;
  sitChoiceA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sitChoiceB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sitChoiceC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: boolean;
  bookedValue: any;
  bookedSit :any = [];

  movieForm: FormGroup;
  movie_id: any;
  alreadyBooked :any = [];

  constructor(private fb: FormBuilder,
              private router : Router,
              private service: MovieserviceService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.selected = false;
    this.bookingData = JSON.parse(localStorage.getItem('data'));
    console.log(this.bookingData);
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.movie_id = params['id']
    });

    this.movieForm = this.fb.group({
      name      : ['',Validators.required],
      date      : ['',Validators.required],
      email     : ['',[Validators.required, Validators.email]],
    });
  }

  checkMoviedata(){
    this.alreadyBooked = [];
    console.log(this.movieForm.value.date)
    let checkData = {
      date     : this.movieForm.value.date,
      movie_id : this.movie_id
    }

    this.service.get('api/postbook/'+this.movie_id+'/'+this.movieForm.value.date).subscribe((res:any)=>{
      console.log(res.length>0);
      if(res.length>0){
        for(let i = 0;i<res.length;i++){
          for(let j=0;j<res[i].bookedSit.length;j++){
            this.alreadyBooked.push(res[i].bookedSit[j]);
          }
        }
      }else{
        this.alreadyBooked = [];
      }
    })
  }

  selecteSits(sitNumber) {
    if (this.bookedSit.length < this.bookingData.numberOfsits)  {
      this.selected = true;
      this.bookedValue = sitNumber;
       if (this.bookedSit.includes(sitNumber)) {
        this.bookedSit.splice(this.bookedSit.indexOf(sitNumber),1);
       } else {
        this.bookedSit.push(sitNumber);
       }
    }if( this.bookedSit.length === this.bookingData.numberOfsits ){
      this.bookedSit.splice(0,1);
      this.bookedSit.push(sitNumber);
    }
  }

  onSubmit() {
    let confirmSits = {
      bookedSit : this.bookedSit,
      movieName : this.movie_id,
      sits      : this.bookingData.numberOfsits,
      name      : this.movieForm.value.name,
      date      : this.movieForm.value.date,
      email     : this.movieForm.value.email,
    }
    console.log(confirmSits);

    localStorage.setItem('confirmData', JSON.stringify(confirmSits));
    this.service.post('api/postbook/',confirmSits).subscribe((res:any)=>{
      console.log(res);
    })
    this.router.navigate(['/confirm']);
  }
}
