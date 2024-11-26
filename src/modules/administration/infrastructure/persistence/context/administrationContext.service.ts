import { Company } from '@app/modules/administration/domain/company/company.entity';
import { CompanyPerson } from '@app/modules/administration/domain/companyPerson/companyPerson.entity';
import { Person } from '@app/modules/administration/domain/person/person.entity';
import { AbstractRepository } from '@app/modules/database/classes/abstractRepository';
import { GenericRepository } from '@app/modules/database/classes/genericRepository';
import { Todo } from '@app/modules/example/domain/todo/todo.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { Request } from 'express';
import { DataSource } from 'typeorm';

@Injectable()
export class AdministrationContext {
  todo: AbstractRepository<Todo>;
  person: AbstractRepository<Person>;
  company: AbstractRepository<Company>;
  companyPerson: AbstractRepository<CompanyPerson>;

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
    this.companyPerson = new GenericRepository<CompanyPerson>(
      CompanyPerson,
      this.dataSource,
      this.request,
    );
  }
}
