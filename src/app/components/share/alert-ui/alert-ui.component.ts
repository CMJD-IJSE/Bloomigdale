import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {itemData} from '../ItemData';
import {ItemService} from '../../../service/item.service';
import {MatButton} from '@angular/material/button';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {
  displayedColumns: string[] = ['Item ID', 'Name', 'Size', 'Qty', 'Price', 'Operation'];


  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<itemData>;

  constructor(
    private itemService: ItemService,
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: itemData[]) {}

  itemArray: itemData[] = this.data;
  dataSource = this.itemArray;

  // tslint:disable-next-line:typedef
  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  // tslint:disable-next-line:typedef
  delete(id: string) {
    this.itemService.deleteItem(id).subscribe(resp => {
      this.itemArray = this.data;
      alert(resp.message);
    }, error => {
      console.log(error);
    });
  }
}

/*export interface PeriodicElement {
  itemID: string;
  itemName: string;
  itemSize: string;
  itemQty: number;
  itemPrice: number;
}*/
