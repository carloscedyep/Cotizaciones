import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cotizacion',
    templateUrl: './cotizacion.html',
    styleUrls: ['./cotizacion.css']
})

export class Cotizacion {
    title = 'Principal';

    private _categoria:Object;
    private _producto:Object;

    get categoria(): Object { return this._categoria; }
    get producto(): Object { return this._producto; }

    constructor(){
    }

    seleccionCategoria(categoria:Object){
        this._categoria = categoria;
    }

    seleccionProducto(producto:Object){
        this._producto = producto;
    }

    ngOnInit() {
    }
}