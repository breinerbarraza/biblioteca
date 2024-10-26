import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { Role } from '@app/modules/security/domain/role/role.entity';
import { User } from '@app/modules/security/domain/user/user.entity';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable()
export class SecurityContext {
  user: AbstractRepository<User>;
  userSession: AbstractRepository<UserSession>;
  role: AbstractRepository<Role>;
  userRole: AbstractRepository<UserRole>;
  loginAttempt: AbstractRepository<LoginAttempt>;

  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.user = new GenericRepository<User>(
      User,
      this.dataSource,
      this.request,
    );
    this.userSession = new GenericRepository<UserSession>(
      UserSession,
      this.dataSource,
      this.request,
    );
    this.role = new GenericRepository<Role>(
      Role,
      this.dataSource,
      this.request,
    );
    this.userRole = new GenericRepository<UserRole>(
      UserRole,
      this.dataSource,
      this.request,
    );
    this.loginAttempt = new GenericRepository<LoginAttempt>(
      LoginAttempt,
      this.dataSource,
      this.request,
    );
  }
}
