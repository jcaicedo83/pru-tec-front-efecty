export interface cliente{
     Nombres :string;
     Apellidos :string;
     IdTipoDoc :number;
     nroDocumento:string;
     FechaNacimiento:string;
     Valor:number;
     IdEstadoCivil:number;
}

export interface EstadoCivil{
    IdEstadoCivil:number;
    CodEstadoCivil:string;
    DescEstadoCivil:string;
    Activo:number;
}