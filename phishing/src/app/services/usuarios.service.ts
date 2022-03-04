import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Usuario} from "../Models/usuarios"
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuario:Usuario;

  //objtempemp
  constructor(private http: HttpClient){
    console.log("Servicio listo para usarse");

    //this.http.get('https://restcountries.com/v3.1/lang/spa')
    //this.http.get('http://localhost:58932/LeerPerfil/2')
    this.http.post('http://localhost:24700/api/Usuario', this.usuario)
    .subscribe(paises => {
        console.log(paises);
      })


}

postUsuario(form:NgForm){

  this.usuario =
  {
    correo: form.value.email,
    password: form.value.password,
    fecha: "assets/img/aquaman.png"

  }

  this.http.post('http://localhost:24700/api/Usuario', this.usuario)
    .subscribe(paises => {
        console.log(paises);
      })
  return "OK";
}
}
