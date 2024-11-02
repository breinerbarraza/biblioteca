/* istanbul ignore file */
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from '@app/config/envs';
import { EXAMPLE_ENTITIES } from '../example/domain/index';
import { SECURITY_ENTITIES } from '../security/domain/index';
import { UTILITARIA_ENTITIES } from '../utilitaria/domain/index';
import { ADMINISTRATION_ENTITIES } from '../administration/domain/index';

/**
 * A module representing the database.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'postgres',
      url: envs.DATABASE_URL,
      entities: [
        ...EXAMPLE_ENTITIES,
        ...SECURITY_ENTITIES,
        ...UTILITARIA_ENTITIES,
        ...ADMINISTRATION_ENTITIES,
      ],
      logging: true,
      synchronize: process.env.NODE_ENV === 'production' ? false : true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
