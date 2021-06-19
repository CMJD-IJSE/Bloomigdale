export default class ItemDTO{
  private _itemID: string;
  private _itemName: string;
  private _itemSize: string;
  private _itemColor: string;
  private _itemQty: number;
  private _itemPrice: number;


  constructor(itemID: string, itemName: string, itemSize: string, itemColor: string, itemQty: number, itemPrice: number) {
    this._itemID = itemID;
    this._itemName = itemName;
    this._itemSize = itemSize;
    this._itemColor = itemColor;
    this._itemQty = itemQty;
    this._itemPrice = itemPrice;
  }


  get itemID(): string {
    return this._itemID;
  }

  set itemID(value: string) {
    this._itemID = value;
  }

  get itemName(): string {
    return this._itemName;
  }

  set itemName(value: string) {
    this._itemName = value;
  }

  get itemSize(): string {
    return this._itemSize;
  }

  set itemSize(value: string) {
    this._itemSize = value;
  }

  get itemColor(): string {
    return this._itemColor;
  }

  set itemColor(value: string) {
    this._itemColor = value;
  }

  get itemQty(): number {
    return this._itemQty;
  }

  set itemQty(value: number) {
    this._itemQty = value;
  }

  get itemPrice(): number {
    return this._itemPrice;
  }

  set itemPrice(value: number) {
    this._itemPrice = value;
  }
}
