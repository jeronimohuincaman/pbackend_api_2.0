import { Test, TestingModule } from '@nestjs/testing';
import { MediosDePagoController } from './medios_de_pago.controller';
import { MediosDePagoService } from './medios_de_pago.service';

describe('MediosDePagoController', () => {
  let controller: MediosDePagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediosDePagoController],
      providers: [MediosDePagoService],
    }).compile();

    controller = module.get<MediosDePagoController>(MediosDePagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
