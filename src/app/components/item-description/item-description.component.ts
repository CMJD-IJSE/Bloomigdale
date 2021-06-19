import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    itemID: new FormControl('BIC001'),
    itemName: new FormControl('Sandro'),
    itemSize: new FormControl(null, Validators.required),
    itemColor: new FormControl('Navy Blue'),
    itemQty: new FormControl(null, Validators.required),
    itemPrice: new FormControl('127425.80')
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

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveItem() {
    console.log(this.itemForm);
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
