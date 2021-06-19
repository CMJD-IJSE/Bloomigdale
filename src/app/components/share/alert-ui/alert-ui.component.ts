import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {itemData} from '../ItemData';
import {ItemService} from '../../../service/item.service';

@Component({
  selector: 'app-alert-ui',
  templateUrl: './alert-ui.component.html',
  styleUrls: ['./alert-ui.component.scss']
})
export class AlertUIComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    public dialogRef: MatDialogRef<AlertUIComponent>,
    @Inject(MAT_DIALOG_DATA) public data: itemData[]) {}

  itemArray: itemData[] = this.data;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
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
