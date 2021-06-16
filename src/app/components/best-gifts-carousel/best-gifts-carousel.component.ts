import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-best-gifts-carousel',
  templateUrl: './best-gifts-carousel.component.html',
  styleUrls: ['./best-gifts-carousel.component.scss']
})
export class BestGiftsCarouselComponent implements OnInit {

  constructor() { }

  SubOwlOptions: OwlOptions = {
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
