import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MatButtonModule} from '@angular/material/button';
import { RecommendedCarouselComponent } from './components/recommended-carousel/recommended-carousel.component';
import { BestGiftsCarouselComponent } from './components/best-gifts-carousel/best-gifts-carousel.component';
import { NewArrivalCarouselComponent } from './components/new-arrival-carousel/new-arrival-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendedCarouselComponent,
    BestGiftsCarouselComponent,
    NewArrivalCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    CarouselModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

