import { Module } from '@nestjs/common';
import { CommonModule } from '@app/modules/common/common.module';
import { DatabaseModule } from './modules/database/database.module';
import { ExampleModule } from './modules/example/example.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [DatabaseModule, CommonModule, ExampleModule, SecurityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
