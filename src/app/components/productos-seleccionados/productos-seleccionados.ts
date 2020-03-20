import { Component, OnInit, Input } from '@angular/core';
import { findObjectAtr_number } from '../../utilitarios/utilitario';

@Component({
  selector: 'productos-seleccionados',
  templateUrl: './productos-seleccionados.html',
  styleUrls: ['./productos-seleccionados.css']
})
export class ProductosSeleccionados implements OnInit {
  public productos : Object[] = [];

  @Input() set Productos(producto:Object){
    var arrayProducto = new Object();
    arrayProducto["id"] = Object(producto)["id"];
    arrayProducto["nombre"] = Object(producto)["nombre"];
    arrayProducto["precio"] = Object(producto)["precio"];
    if (arrayProducto["id"] != undefined)
    {
      if(findObjectAtr_number(this.productos,"id",arrayProducto["id"])== false){
        this.productos.push(arrayProducto);
      }
      else{
        alert("Este producto ya fue agregado");
      }
    }
  }

  constructor() { 
    
  }

  ngOnInit() {

  }

}
