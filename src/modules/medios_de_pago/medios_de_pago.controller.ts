import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediosDePagoService } from './medios_de_pago.service';
import { CreateMediosDePagoDto } from './dto/create-medios_de_pago.dto';
import { UpdateMediosDePagoDto } from './dto/update-medios_de_pago.dto';

@Controller('medios-de-pago')
export class MediosDePagoController {
  constructor(private readonly mediosDePagoService: MediosDePagoService) {}

  @Post()
  create(@Body() createMediosDePagoDto: CreateMediosDePagoDto) {
    return this.mediosDePagoService.create(createMediosDePagoDto);
  }

  @Get()
  findAll() {
    return this.mediosDePagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediosDePagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediosDePagoDto: UpdateMediosDePagoDto) {
    return this.mediosDePagoService.update(+id, updateMediosDePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediosDePagoService.remove(+id);
  }
}
