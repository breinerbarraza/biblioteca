import { Module } from '@nestjs/common';
import { CommonModule } from '@app/modules/common/common.module';
import { DatabaseModule } from './modules/database/database.module';
import { ExampleModule } from './modules/example/example.module';
import { SecurityModule } from './modules/security/security.module';
import { UtilitariaModule } from './modules/utilitaria/utilitaria.module';

@Module({
  imports: [
    DatabaseModule,
    CommonModule,
    ExampleModule,
    SecurityModule,
    UtilitariaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
