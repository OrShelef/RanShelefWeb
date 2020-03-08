import { Component, OnInit, AfterViewInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import emailjs from 'emailjs-com';
import { Title, Meta } from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import { InvestigationDialogComponent } from '../InvestigationDialog/InvestigationDialog.component';
import { SendMailDialogComponent } from '../SendMailDialog/SendMailDialog.component';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})



export class HomeComponent implements OnInit,AfterViewInit {
  
 

  public subscribeForm: FormGroup;
    public email: FormControl;
    public name:FormControl;
    public body:FormControl;
  constructor(private spinner: NgxSpinnerService,private _title: Title, private _meta: Meta,public dialog: MatDialog) { }
 
 
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
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination:true,
 
  };
  index:number=0;

  createFormControls() {
    this.email = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

    this.name=new FormControl('',[
      Validators.required
    ]);

    this.body=new FormControl('',[
      Validators.required
    ]);

}

createForm() {
    this.subscribeForm = new FormGroup({
        email: this.email,
        name:this.name,
        body:this.body
    });
}

isBusy:boolean=false;
sendMail() {
 this.isBusy=true;
  if(!this.subscribeForm.valid)
  { 
    this.isBusy=false;
    return;
  }
  var params={
    from_name: this.name.value,
    to_name: 'רן שלף',
    message_html: this.body.value
  };
  emailjs.send('1','template_6QqoMkyF', params, 'user_5LpnAAPNaorAos1nXsyIF')
  .then((response) => {
    const dialogRef = this.dialog.open(SendMailDialogComponent, {
      width: this.DialogSize,
      height:"auto",
      data: ""
    });
  
  }, (err) => {
   
  }).finally(()=>{
    this.isBusy=false;
  });
}
DialogSize="50%";

  ngOnInit() {
   
   
    this._title.setTitle('רן שלף חקירות');
    this._meta.updateTag({ name: 'description', content: 'This is the Home page!' });
    this.createFormControls();
    this.createForm();
    console.log(window.screen.width);
    
    if(window.screen.width<500)
    {
      this.DialogSize="90%";
    
    }
  
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    this.timeline=[
      {
      header:"צבא ההגנה לישראל",
      content:"שירות צבאי המסתיים במעל ל-10 שנים כקצין מודיעין אוגדה במילואים ומפקד יחידה",
      years:"1978-2017",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Badge_of_the_Israel_Defense_Forces.new.svg/1200px-Badge_of_the_Israel_Defense_Forces.new.svg.png"     
     },
     {
       header:"משטרת ישראל",
       content:"שירות במזפ/אגף החקירות בסופו מפקד במשך 12 שנים על המעבדה לחקירת הצתות",
       years:"1988-2012",
       image:"https://police.gov.il/join/images/giyusLogo.svg"     
      },
      {
       header:"כבאות והצלה לישראל",
       content:"ראש מחלקת החקירות ומקים מערך החקירות ברשות הארצית לכבאות והצלה",
       years:"2012-2019",
       image:"https://upload.wikimedia.org/wikipedia/he/6/68/FireDepIsrael.svg"     
      },
      {
       header:"אוניברסיטת חיפה",
       content:"מרצה בקורס לפיזיקה וכימיה של הבעירה, תואר שני ללימודי ניהול אסון עם התמחות במדעי האש/ החוג לגיאוגרפיה",
       years:"2014-היום",
       image:"https://upload.wikimedia.org/wikipedia/he/thumb/d/d9/%D7%90%D7%95%D7%A0%D7%99%D7%91%D7%A8%D7%A1%D7%99%D7%98%D7%AA_%D7%97%D7%99%D7%A4%D7%94_-_%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99.svg/1200px-%D7%90%D7%95%D7%A0%D7%99%D7%91%D7%A8%D7%A1%D7%99%D7%98%D7%AA_%D7%97%D7%99%D7%A4%D7%94_-_%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99.svg.png"     
      },
   ];
  }
  timeline;
  ngAfterViewInit(){
  this.spinner.hide();
  
  }
 
  openDialog(num:number): void {
    const dialogRef = this.dialog.open(InvestigationDialogComponent, {
      width: '95%',
      height:'95%',
      data: num
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

 


}

