import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modules/auth/usuarios/usuarios.module';
import { MovimientosModule } from './modules/movimientos/movimientos.module';
import { PagosModule } from './modules/pagos/pagos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { MediosDePagoModule } from './modules/medios_de_pago/medios_de_pago.module';
import { OrigenModule } from './modules/origen/origen.module';
import { FondosModule } from './modules/fondos/fondos.module';

@Module({
  imports: [UsuariosModule, MovimientosModule, PagosModule, CategoriasModule, MediosDePagoModule, OrigenModule, FondosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
