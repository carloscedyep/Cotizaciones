import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.html',
  styleUrls: ['./lista-productos.css']
})
export class ListaProductos {

  private _categoria: Object;
  private _nombreCategoria: string;

  @Input()
  set categoria(categoria: Object) {
    this._categoria = categoria;
    this._nombreCategoria = Object(categoria)["nombre"]
  }

  get categoria(): Object { return this._categoria; }
  get nombreCategoria(): string { return this._nombreCategoria; }

  @Output() productoEmisor = new EventEmitter<Object>();

  SeleccionProducto(producto: Object){
    this.productoEmisor.emit(producto);
  }
  
  public productos : Object[] = [
    {id:1,nombre:'Producto 1',descripcion:'Descripción',precio:20.00},
    {id:2,nombre:'Producto 2',descripcion:'Descripción',precio:20.00},
    {id:3,nombre:'Producto 3',descripcion:'Descripción',precio:20.00},
    {id:4,nombre:'Producto 4',descripcion:'Descripción',precio:20.00},
    {id:5,nombre:'Producto 5',descripcion:'Descripción',precio:20.00},
    {id:6,nombre:'Producto 6',descripcion:'Descripción',precio:20.00},
  ]

  constructor() { }

}
