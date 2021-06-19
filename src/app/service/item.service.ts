import { Injectable } from '@angular/core';
import ItemDTO from '../dto/ItemDTO';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  public saveItem(c: ItemDTO): Observable<any>{
    return this.http.post(this.baseUrl + 'saveItem', {
      itemID: c.itemID,
      itemName: c.itemName,
      itemSize: c.itemSize,
      itemColor: c.itemColor,
      itemQty: c.itemQty,
      itemPrice: c.itemPrice,
    });
  }

  public getAllItem(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllItems');
  }

}
