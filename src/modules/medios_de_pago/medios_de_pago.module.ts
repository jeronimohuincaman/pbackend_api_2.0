import { Module } from '@nestjs/common';
import { MediosDePagoService } from './medios_de_pago.service';
import { MediosDePagoController } from './medios_de_pago.controller';

@Module({
  controllers: [MediosDePagoController],
  providers: [MediosDePagoService],
})
export class MediosDePagoModule {}
