import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { User } from '@app/modules/security/domain/user/user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable()
export class SecurityContext {
  user: AbstractRepository<User>;

  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.user = new GenericRepository<User>(
      User,
      this.dataSource,
      this.request,
    );
  }
}
