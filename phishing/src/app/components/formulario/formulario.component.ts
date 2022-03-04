
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../../services/usuarios.service';
import {Usuario} from "../../Models/usuarios";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario:any ={};


  _usuariosService2:any = UsuariosService;
  constructor(private activatedRoute: ActivatedRoute,
    private _usuariosService:UsuariosService) {

    this.activatedRoute.params.subscribe( params => {
      this.usuario = this._usuariosService.postUsuario( params['id'] );
      console.log(this.usuario);
    })
  }
  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {


    this.usuario = this._usuariosService.postUsuario(form);

    console.log('Your form data : ', form.value);
}
}
