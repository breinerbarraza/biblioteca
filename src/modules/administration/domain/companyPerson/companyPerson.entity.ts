import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';
import { Person } from '../person/person.entity';

/**
 * A class representing a companyPersons entity.
 */
@Entity({
  name: 'companyPersons',
})
export class CompanyPerson {
  /**
   * Company id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Company idCompany
   */
  @Column()
  @AutoMap()
  idCompany: number;

  /**
   * Company idPerson
   */
  @Column()
  @AutoMap()
  idPerson: number;

  /**
   * company
   */
  @ManyToOne(() => Company, (x) => x.companyPerson)
  @JoinColumn({
    name: 'idCompany',
  })
  company?: Company;

  /**
   * person
   */
  @ManyToOne(() => Person, (x) => x.companyPerson)
  @JoinColumn({
    name: 'idPerson',
  })
  person?: Person;
}
