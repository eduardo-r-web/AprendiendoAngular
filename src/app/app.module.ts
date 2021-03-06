import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {APP_ROUTING} from './app.routes'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/shared/footer/footer.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

//Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    Ejercicio1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
