import { Component, OnInit } from '@angular/core';
import { EfectyService } from './services/efecty.service';
import { EstadoCivil, cliente } from '../models/cliente';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'prueba-Tecnica-Front';
  public estados:EstadoCivil[] =[];

///controles
fcTipoDoc = new FormControl('');
fcNroDoc = new FormControl('', [Validators.required]);
fcNombre = new FormControl('');
fcApellido = new FormControl('');
fcFechaNac = new FormControl('');
fcValor = new FormControl('');
fcEstadoCiv= new FormControl('');
  constructor(public _svc:EfectyService) {

  }

  ngOnInit():void{
    this._svc.ConsultarEstadosCiviles().then((resultado)=>{
      estados: resultado?.resultado ;
    }).catch(
      (err=>{
        console.log(err);
      })
    );
  }

  guardar(){
    let usuario :cliente={
      nroDocumento:this.fcNroDoc.value ||'',
      Nombres :this.fcNombre.value||'',
      Apellidos:this.fcApellido.value||'',
      FechaNacimiento:this.fcFechaNac.value||'',
      IdEstadoCivil:Number(this.fcEstadoCiv.value)||-1,
      IdTipoDoc:Number(this.fcTipoDoc.value)||-1,
      Valor:Number(this.fcValor.value)||-1
    }

    this._svc.ConsultarClientes(usuario).then((resultado)=>{
      let usrResult = resultado?.resultado[0];

      this.fcApellido = usrResult.Apellidos;
      this.fcEstadoCiv = usrResult.IdEstadoCivil;
      this.fcFechaNac = usrResult.FechaNacimiento;
      this.fcNombre = usrResult.Nombres;
      this.fcTipoDoc = usrResult.IdTipoDoc;
      this.fcNroDoc = usrResult.nroDocumento;
    }).catch(err=>{
      console.log(err);
    });
  }

  consultar(){
    let usuario :cliente={
      nroDocumento:this.fcNroDoc.value ||'',
      Nombres :'',
      Apellidos:'',
      FechaNacimiento:'',
      IdEstadoCivil:-1,
      IdTipoDoc:-1,
      Valor:-1
    }

    this._svc.ConsultarClientes(usuario).then((resultado)=>{
      let usrResult = resultado?.resultado[0];

      this.fcApellido = usrResult.Apellidos;
      this.fcEstadoCiv = usrResult.IdEstadoCivil;
      this.fcFechaNac = usrResult.FechaNacimiento;
      this.fcNombre = usrResult.Nombres;
      this.fcTipoDoc = usrResult.IdTipoDoc;
      this.fcNroDoc = usrResult.nroDocumento;
    }).catch(err=>{
      console.log(err);
    });
  }
}
