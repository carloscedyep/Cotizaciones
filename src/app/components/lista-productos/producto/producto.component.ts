import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  private _id:number;
  private _nombre:string;
  private _descripcion:string;
  private _precio:number;
  private _productos:Object[];

  @Input()
  set productos(productos: Object[]) {
    this._productos = productos;
    this._id = Object(productos)["id"];
    this._nombre = Object(productos)["nombre"];
    this._descripcion = Object(productos)["descripcion"];
    this._precio = Object(productos)["precio"];
  }

  get productos(): Object[] { return this._productos; }

  get id(): number { return this._id; }
  get nombre(): string { return this._nombre; }
  get descripcion(): string { return this._descripcion; }
  get precio(): number{ return this._precio; }

  @Output() productoEmisor = new EventEmitter<Object>();

  public seleccionProducto(){
    var producto = new Object();
    producto["id"] = this._id;
    producto["nombre"] = this._nombre;
    producto["precio"] = this._precio;
    this.productoEmisor.emit(producto);
  }

  constructor() { }

  ngOnInit() {
  }

}
