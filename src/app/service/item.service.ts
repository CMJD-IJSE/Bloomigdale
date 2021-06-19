import { Injectable } from '@angular/core';
import ItemDTO from '../dto/ItemDTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:3000/api/v1/itemRoute/saveItem';

  constructor(private http: HttpClient) { }

  public saveItem(c: ItemDTO): Observable<any>{
    return this.http.post(this.baseUrl, {
      itemID: c.itemID,
      itemName: c.itemName,
      itemSize: c.itemSize,
      itemColor: c.itemColor,
      itemQty: c.itemQty,
      itemPrice: c.itemPrice,
    });
  }

}
