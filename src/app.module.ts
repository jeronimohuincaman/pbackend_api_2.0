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
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsuariosModule, MovimientosModule, PagosModule, CategoriasModule, MediosDePagoModule, OrigenModule, FondosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
