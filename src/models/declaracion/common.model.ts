import { AmbitoPublico, NivelOrdenGobierno, TipoPersona, UnidadMedida } from './types';

export interface ActividadLaboralSectorPrivadoOtro {
  nombreEmpresaSociedadAsociacion: string;
  empleoCargoComision: string;
  rfc: string;
  fechaIngreso: string;
  sector: Catalogo;
  salarioMensualNeto: Monto;
  proveedorContratistaGobierno: boolean;
}

export interface ActividadLaboralSectorPublico {
  nivelOrdenGobierno: NivelOrdenGobierno;
  ambitoPublico: AmbitoPublico;
  nombreEntePublico: string;
  areaAdscripcion: string;
  empleoCargoComision: string;
  funcionPrincipal: string;
  salarioMensualNeto: Monto;
  fechaIngreso: string;
}

export interface Catalogo {
  clave: string;
  valor: string;
}

export interface DomicilioExtranjero {
  pais: string;
  calle: string;
  numeroExterior: string;
  numeroInterior: string;
  ciudadLocalidad: string;
  estadoProvincia: string;
  codigoPostal: string;
}

export interface DomicilioMexico {
  calle: string;
  numeroExterior: string;
  numeroInterior: string;
  coloniaLocalidad: string;
  municipioAlcaldia: Catalogo;
  entidadFederativa: Catalogo;
  codigoPostal: string;
}

export interface Monto {
  valor: number;
  moneda: string;
}

export interface Superficie {
  valor: number;
  unidad: UnidadMedida;
}

export interface Tercero {
  tipoPersona: TipoPersona;
  nombreRazonSocial: string;
  rfc: string;
}

export interface Transmisor {
  tipoPersona: TipoPersona;
  nombreRazonSocial: string;
  rfc: string;
  relacion: Catalogo;
}

export interface Ubicacion {
  pais: string;
  entidadFederativa: Catalogo;
}

export interface OtroEmpleoCargoComision {
  nivelOrdenGobierno?: NivelOrdenGobierno;
  ambitoPublico?: AmbitoPublico;
  nombreEntePublico?: string;
  areaAdscripcion?: string;
  empleoCargoComision?: string;
  contratadoPorHonorarios?: boolean;
  nivelEmpleoCargoComision?: string;
  funcionPrincipal?: string;
  fechaTomaPosesion?: string;
  telefonoOficina?: TelefonoOficina;
  domicilioMexico?: DomicilioMexico;
  domicilioExtranjero?: DomicilioExtranjero;
  aclaracionesObservaciones?: string;
}

interface TelefonoOficina {
  telefono: string;
  extension: string;
}