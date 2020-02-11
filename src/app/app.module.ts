import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/Home.component';
import { AngularComponent } from './Angular/Angular.component';
import {AngularModule} from './Angular/Angular.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
   declarations: [
    AngularComponent,
      AppComponent,
      HomeComponent
   ],
   imports: [
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    ScrollToModule.forRoot(),
    SwiperModule,
     FlexLayoutModule,
    AngularModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MglTimelineModule,
      NgxSpinnerModule

   ],
   providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
