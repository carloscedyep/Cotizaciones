import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

  private _id:number;
  private _nivel:string;
  private _clase:string;
  private _nombre:string;
  private _elementos:Object[];

  @Input()
  set elementos(elementos: Object[]) {
    this._elementos = elementos;
    this._id = Object(elementos)["id"];
    this._nivel = Object(elementos)["nivel"];
    this._clase = Object(elementos)["clase"];
    this._nombre = Object(elementos)["nombre"];
  }

  get elementos(): Object[] { return this._elementos; }

  @Output() elementoEmisor = new EventEmitter<Object>();

  get id(): number { return this._id; }
  get nivel(): string { return this._nivel; }
  get clase(): string { return this._clase; }
  get nombre(): string { return this._nombre; }

  public seleccionMenu(){
    if (Object(this._elementos)["elementos"]== undefined){
      var arrayMenu = new Object();
      arrayMenu["id"] = this._id;
      arrayMenu["nombre"] = this._nombre;
      this.elementoEmisor.emit(arrayMenu);
    }
  }

  public menuSeleccionado(elemento:Object){
    this.elementoEmisor.emit(elemento);
  }

  constructor() { }

  ngOnInit() {
  }

}
