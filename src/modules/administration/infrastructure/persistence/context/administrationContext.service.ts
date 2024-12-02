import { Company } from '@app/modules/administration/domain/company/company.entity';
import { LegalRepresentative } from '@app/modules/administration/domain/legalReprensentative/legalRepresentative.entity';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';
import { Menu } from '@app/modules/administration/domain/menu/menu.entity';
import { Modules } from '@app/modules/administration/domain/modulos/modules.entity';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';

@Injectable()
export class AdministrationContext {
  todo: AbstractRepository<Todo>;
  person: AbstractRepository<Person>;
  company: AbstractRepository<Company>;
  legalRepresentative: AbstractRepository<LegalRepresentative>;
  companyPerson: AbstractRepository<CompanyPerson>;
  menu: AbstractRepository<Menu>;
  modulo: AbstractRepository<Modules>;
  subModule: AbstractRepository<SubModule>;

  constructor(
    @InjectDataSource('main') private readonly dataSource: DataSource,
    @Inject('REQUEST') private request: Request,
  ) {
    this.todo = new GenericRepository<Todo>(
      Todo,
      this.dataSource,
      this.request,
    );
    this.person = new GenericRepository<Person>(
      Person,
      this.dataSource,
      this.request,
    );
    this.company = new GenericRepository<Company>(
      Company,
      this.dataSource,
      this.request,
    );
    this.legalRepresentative = new GenericRepository<LegalRepresentative>(
      LegalRepresentative,
      this.dataSource,
      this.request,
    );
    this.companyPerson = new GenericRepository<CompanyPerson>(
      CompanyPerson,
      this.dataSource,
      this.request,
    );
    this.menu = new GenericRepository<Menu>(
      Menu,
      this.dataSource,
      this.request,
    );
    this.modulo = new GenericRepository<Modules>(
      Modules,
      this.dataSource,
      this.request,
    );
    this.subModule = new GenericRepository<SubModule>(
      SubModule,
      this.dataSource,
      this.request,
    );
  }
}
