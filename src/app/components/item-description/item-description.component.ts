import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    itemID: new FormControl(),
    itemName: new FormControl(),
    itemSize: new FormControl(),
    itemColor: new FormControl(),
    itemQty: new FormControl(),
    itemPrice: new FormControl()
  });

  constructor() {
  }
  sizes: Sizes[] = [
    {value: 'X-Small', viewValue: 'XS'},
    {value: 'Small', viewValue: 'S'},
    {value: 'Medium', viewValue: 'M'},
    {value: 'Large', viewValue: 'L'},
    {value: 'X-Large', viewValue: 'XL'},
    {value: 'XX-Large', viewValue: 'XXL'}
  ];

  quantities: Quantities[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ];
  itemQty: any;
  itemSize: any;

  ngOnInit(): void {
  }

}

interface Sizes {
  value: string;
  viewValue: string;
}

interface Quantities {
  value: string;
  viewValue: string;
}
