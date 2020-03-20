import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css']
})
export class MenuVerticalComponent implements OnInit {

  constructor() { }

  @Output() menuEmisor = new EventEmitter<Object>();

  public menuSeleccionado(elemento:Object){
    this.menuEmisor.emit(elemento);
  }

  public elementos : Object[] = [
    {id:1,nivel:'pd-0',clase:'desplegable',nombre:'Todas las categorias',elementos:
        [
          {id:2,nivel:'pd-1',clase:'',nombre:'Categoría 1'},
          {id:3,nivel:'pd-1',clase:'',nombre:'Categoría 2'},
          {id:4,nivel:'pd-1',clase:'desplegable',nombre: 'Categoría 3', elementos:
            [
              {id:5,nivel:'pd-2',clase:'',nombre:'Categoría 3 1'},
              {id:6,nivel:'pd-2',clase:'',nombre:'Categoría 3 2'},
              {id:7,nivel:'pd-2',clase:'',nombre:'Categoría 3 3'},
              {id:8,nivel:'pd-2',clase:'desplegable',nombre:'Categoría 3 3', elementos:
              [
                {id:9,nivel:'pd-3',clase:'desplegable',nombre:'Categoría 3 4 1', elementos:
                [
                  {id:10,nivel:'pd-4',clase:'',nombre:'Categoría 3 4 1 2'},
                  {id:11,nivel:'pd-4',clase:'',nombre:'Categoría 3 4 1 3'}
                ]
              },
                {id:12,nivel:'pd-3',clase:'',nombre:'Categoría 3 4 2'},
                {id:13,nivel:'pd-3',clase:'',nombre:'Categoría 3 4 3'}
              ]
            }
            ]
     }
        ]
     },
     {id:14,nivel:'pd-0',clase:'',nombre:'Categoría comunes'}
];

  ngOnInit() {
  }

}
