import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {itemData} from '../ItemData';
import {ItemService} from '../../../service/item.service';
import {MatButton} from '@angular/material/button';
import {MatTable} from '@angular/material/table';
import ItemDTO from '../../../dto/ItemDTO';

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {
  displayedColumns: string[] = ['Item ID', 'Name', 'Size', 'Qty', 'Price', 'Operation'];


  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<ItemDTO>;

  constructor(
    private itemService: ItemService,
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDTO[]) {}

  itemArray: ItemDTO[] = this.data;
  dataSource = this.itemArray;

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
  updateData() {
    alert('Aure you sure?');
  }

}
