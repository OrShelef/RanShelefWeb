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
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { InvestigationDialogComponent } from './InvestigationDialog/InvestigationDialog.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import { SendMailDialogComponent } from './SendMailDialog/SendMailDialog.component';


@NgModule({
   declarations: [
      AngularComponent,
      AppComponent,
      HomeComponent,
      InvestigationDialogComponent,
      SendMailDialogComponent
   ],
   imports: [

    Angular2ImageGalleryModule,
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
   entryComponents: [
      InvestigationDialogComponent,
      SendMailDialogComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
