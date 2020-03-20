import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Cotizacion } from './components/cotizacion/cotizacion';
import { UserLogin } from './components/user-login/user-login';
import { UserOptionsComponent } from './components/user-options/user-options';
import { ListaProductos } from './components/lista-productos/lista-productos';
import { ProductosSeleccionados } from './components/productos-seleccionados/productos-seleccionados';
import { UserRegister } from './components/user-register/user-register';
import { UserRecovery } from './components/user-recovery/user-recovery';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { ElementoComponent } from './components/menu-vertical/elemento/elemento.component';
import { ProductoComponent } from './components/lista-productos/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Cotizacion,
    UserLogin,
    UserOptionsComponent,
    ListaProductos,
    ProductosSeleccionados,
    UserRegister,
    UserRecovery,
    MenuVerticalComponent,
    ElementoComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
