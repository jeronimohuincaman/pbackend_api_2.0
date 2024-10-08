import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateMovimientoDto } from './dto/create-movimiento.dto';
import { UpdateMovimientoDto } from './dto/update-movimiento.dto';

@Injectable()
export class MovimientosService {
  constructor(private prisma: PrismaService) { }

  async create(createMovimientoDto: CreateMovimientoDto) {
    return this.prisma.movimientos.create({
      data: {
        ...createMovimientoDto,
        createdAt: new Date(), // Automáticamente asignamos el campo createdAt
        updatedAt: new Date(), // Automáticamente asignamos el campo updatedAt
      },
    });
  }

  async findAll() {
    return this.prisma.movimientos.findMany({
      include: {
        categorias: true,
        usuarios: true,
        medios_de_pago: true,
        pagos: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.movimientos.findUnique({
      where: { idmovimiento: id },
      include: {
        categorias: true,
        usuarios: true,
        medios_de_pago: true,
        pagos: true,
      },
    });
  }

  async update(id: number, updateMovimientoDto: UpdateMovimientoDto) {
    return this.prisma.movimientos.update({
      where: { idmovimiento: id },
      data: {
        ...updateMovimientoDto,
        updatedAt: new Date(), // Actualizamos el campo updatedAt
      },
    });
  }

  async remove(id: number) {
    return this.prisma.movimientos.delete({
      where: { idmovimiento: id },
    });
  }
}
