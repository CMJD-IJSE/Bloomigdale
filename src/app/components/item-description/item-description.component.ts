import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import ItemDTO from '../../dto/ItemDTO';
import {ItemService} from '../../service/item.service';
import {MatDialog} from '@angular/material/dialog';
import {AlertUIComponent} from '../share/alert-ui/alert-ui.component';
import {itemData} from '../share/ItemData';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  constructor(private itemService: ItemService, public dialog: MatDialog) {
  }

  itemForm: FormGroup = new FormGroup({
    itemID: new FormControl('BIC001'),
    itemName: new FormControl('Sandro'),
    itemSize: new FormControl(null, Validators.required),
    itemColor: new FormControl('Navy Blue'),
    itemQty: new FormControl(null, Validators.required),
    itemPrice: new FormControl('127425.80')
  });

  itemArray: ItemDTO[] = [];


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
  itemDataArray: itemData[] = [];

  ngOnInit(): void {
    this.loadAllItems();
  }
  // tslint:disable-next-line:typedef
  saveItem() {
    const item = new ItemDTO(
      this.itemForm.get('itemID')?.value,
      this.itemForm.get('itemName')?.value,
      this.itemForm.get('itemSize')?.value,
      this.itemForm.get('itemColor')?.value,
      Number(this.itemForm.get('itemQty')?.value),
      Number(this.itemForm.get('itemPrice')?.value)
    );

    this.itemService.saveItem(item).subscribe(resp => {
      console.log(resp);
      if (resp.state === true){
        this.openDialog();
      }
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  private loadAllItems() {
    this.itemService.getAllItem().subscribe(resp => {
      this.itemArray = resp.dataSet;
    }, error => {
      console.log(error);
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlertUIComponent, {
      width: '70%',
      height: '80%',
      data: this.itemArray
    });
    console.log(this.itemDataArray);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
