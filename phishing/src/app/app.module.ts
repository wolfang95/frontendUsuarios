import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <---- Importar FormsModule

import { APP_ROUTING } from './app.routes';

import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
