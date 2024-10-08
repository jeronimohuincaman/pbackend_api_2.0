export class CreateMovimientoDto {
    descripcion: string;
    idtipo: number;
    idcategoria: number;
    idusuario: number;
    idmediopago: number;
    monto: number;
    idpago?: number;
    fecha_hora: Date; // Agregar el campo fecha_hora
}
