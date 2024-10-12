import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ExampleModule } from './modules/example/example.module';
import { CommonModule } from '@app/modules/common/common.module';

@Module({
  imports: [DatabaseModule, CommonModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
