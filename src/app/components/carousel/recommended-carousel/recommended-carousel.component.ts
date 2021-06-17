import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-recommended-carousel',
  templateUrl: './recommended-carousel.component.html',
  styleUrls: ['./recommended-carousel.component.scss']
})
export class RecommendedCarouselComponent implements OnInit {

  constructor() { }
  SubOwlOptions: OwlOptions = {
    margin: 40,
    loop: true,
    nav: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
  };

  ngOnInit(): void {
}
}
