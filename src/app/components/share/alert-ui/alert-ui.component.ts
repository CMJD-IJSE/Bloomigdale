import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {itemData} from '../ItemData';
import {ItemService} from '../../../service/item.service';
import {MatButton} from '@angular/material/button';
import {MatTable} from '@angular/material/table';
import ItemDTO from '../../../dto/ItemDTO';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDTO[]) {}
  displayedColumns: string[] = ['Item ID', 'Name', 'Size', 'Qty', 'Price', 'Operation'];


  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<ItemDTO>;

  itemArray: ItemDTO[] = this.data;
  dataSource = this.itemArray;

  orderID = '';
  itemID = '';
  itemName = '';
  itemColor = '';
  itemSize = '';
  itemQty = 0;
  itemPrice = 0;

  updateForm: FormGroup = new FormGroup({
    orderID: new FormControl(this.orderID),
    itemID: new FormControl(this.itemID),
    itemName: new FormControl(this.itemName),
    itemSize: new FormControl(this.itemSize, Validators.required),
    itemColor: new FormControl(this.itemColor),
    itemQty: new FormControl(this.itemQty, Validators.required),
    itemPrice: new FormControl(this.itemPrice)
  });

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

  // tslint:disable-next-line:typedef
  /*addData() {
    this.dataSource.push(this.itemArray[this.itemArray.length]);
    this.table.renderRows();
  }*/

  // tslint:disable-next-line:typedef
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  // tslint:disable-next-line:typedef
  delete(id: string) {
    this.itemService.deleteItem(id).subscribe(resp => {
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateItem(tc: ItemDTO) {
    this.orderID = tc.orderID;
    this.itemID = tc.itemID;
    this.itemSize = tc.itemSize;
    this.itemName = tc.itemName;
    this.itemColor = tc.itemColor;
    this.itemQty = tc.itemQty;
    this.itemPrice = tc.itemPrice;
  }

  // tslint:disable-next-line:typedef
  update() {
    const dto = new ItemDTO(
      this.orderID,
      this.itemID,
      this.itemName,
      this.itemSize,
      this.itemColor,
      this.itemQty,
      this.itemPrice
    );
    this.itemService.updateItem(dto).subscribe(resp => {
      alert(resp.message);
      window.location.reload();
    }, error => {
      alert(error);
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
