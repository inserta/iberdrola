export class ErroresFormularioRegistro{
    tipoDocumento: string;
    numIdentificacion: string;
    fechaExpedicion: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    fechaNacimiento: string;
    sexo: string;
    nacionalidad: string;
    tarjeta_numero: string;
    tarjeta_anyo: string;
    tarjeta_mes: string;
    tarjeta_cvc: string;
    tieneErrores: boolean;
}

export class PasoAnterior {
    paso: number;
    progreso: string;
}

export class DatosDocumento {
    nombre: string;
    apellido1: string;
    apellido2: string;
    pais: string;
    documento: string;
    sexo: string;
    nacimiento: string;
    expedicion: string;
    tipoDocumento: string;
}

export class DatosEmpleado {
    nombre: string;
    apellidos: string;
    documento: string;
    tipoDocumento: string;
}