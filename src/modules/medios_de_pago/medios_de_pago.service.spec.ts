import { Test, TestingModule } from '@nestjs/testing';
import { MediosDePagoService } from './medios_de_pago.service';

describe('MediosDePagoService', () => {
  let service: MediosDePagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediosDePagoService],
    }).compile();

    service = module.get<MediosDePagoService>(MediosDePagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
