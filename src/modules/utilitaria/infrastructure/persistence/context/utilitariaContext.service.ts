import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable()
export class UtilitariaContext {
  cargo: AbstractRepository<Cargo>;
  identificationType: AbstractRepository<IdentificationType>;
  state: AbstractRepository<State>;

  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.cargo = new GenericRepository<Cargo>(
      Cargo,
      this.dataSource,
      this.request,
    );
    this.state = new GenericRepository<State>(
      State,
      this.dataSource,
      this.request,
    );
    this.identificationType = new GenericRepository<IdentificationType>(
      IdentificationType,
      this.dataSource,
      this.request,
    );
  }
}
