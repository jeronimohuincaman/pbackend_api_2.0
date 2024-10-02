import { Injectable } from '@nestjs/common';
import { CreateMediosDePagoDto } from './dto/create-medios_de_pago.dto';
import { UpdateMediosDePagoDto } from './dto/update-medios_de_pago.dto';

@Injectable()
export class MediosDePagoService {
  create(createMediosDePagoDto: CreateMediosDePagoDto) {
    return 'This action adds a new mediosDePago';
  }

  findAll() {
    return `This action returns all mediosDePago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mediosDePago`;
  }

  update(id: number, updateMediosDePagoDto: UpdateMediosDePagoDto) {
    return `This action updates a #${id} mediosDePago`;
  }

  remove(id: number) {
    return `This action removes a #${id} mediosDePago`;
  }
}
