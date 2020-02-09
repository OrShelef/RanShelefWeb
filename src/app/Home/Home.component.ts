import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})



export class HomeComponent implements OnInit {
  public subscribeForm: FormGroup;
    public email: FormControl;
    
  constructor(private http: HttpClient) { }
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };
  public config2: SwiperConfigInterface = {
    a11y: true,
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: true
  };
  index:number=0;

  createFormControls() {
    this.email = new FormControl('', [
        Validators.required
    ]);
}

createForm() {
    this.subscribeForm = new FormGroup({
        email: this.email
    });
}

sendMail() {
  if (this.subscribeForm.valid) {
    console.log("assa");
  
      this.http.post("../email.php", {email:'ori9262317@gmail.com'}).subscribe();
  }
}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    /*setInterval(()=>{
      if(this.index==2)
      this.index=0;
    this.index++;
    },5000);*/
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  
}
