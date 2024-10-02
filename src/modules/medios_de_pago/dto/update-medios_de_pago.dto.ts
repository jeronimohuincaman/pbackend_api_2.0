import { PartialType } from '@nestjs/mapped-types';
import { CreateMediosDePagoDto } from './create-medios_de_pago.dto';

export class UpdateMediosDePagoDto extends PartialType(CreateMediosDePagoDto) {}
