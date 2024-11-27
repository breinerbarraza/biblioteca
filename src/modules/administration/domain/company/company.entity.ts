import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyPerson } from '../companyPerson/companyPerson.entity';
import { TypeCompany } from '@app/modules/utilitaria/domain/typeCompany/typeCompany.entity';

/**
 * A class representing a company entity.
 */
@Entity({
  name: 'companies',
})
export class Company {
  /**
   * Company id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Company idState
   */
  @Column()
  @AutoMap()
  idState: number;

  /**
   * Company idIdentificationType
   */
  @Column()
  @AutoMap()
  idIdentificationType: number;

  /**
   * Company identificationNumber
   */
  @Column()
  @AutoMap()
  identificationNumber: number;

  /**
   * Company idTypeCompany
   */
  @Column()
  @AutoMap()
  idTypeCompany: number;

  /**
   * Company dv
   */
  @Column({
    type: 'varchar',
    length: 1,
  })
  @AutoMap()
  dv: string;

  /**
   * Company businessName
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  businessName: string;

  /**
   * Company companyName
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  companyName: string;

  /**
   * Company name
   */
  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @AutoMap()
  webPage: string;

  /**
   * Company name
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  name: string;

  /**
   * Company middleName
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  middleName: string;

  /**
   * Company firstSurname
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @AutoMap()
  firstSurname: string;

  /**
   * Company secondSurname
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @AutoMap()
  secondSurname: string;

  /**
   * Company fullName
   */
  @Column({
    type: 'varchar',
  })
  @AutoMap()
  fullName: string;

  /**
   * Company email
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  email: string;

  /**
   * Company phone
   */
  @Column({
    type: 'varchar',
    length: 10,
  })
  @AutoMap()
  phone: string;

  /**
   * Company fullAddress
   */
  @Column({
    type: 'varchar',
  })
  @AutoMap()
  fullAddress: string;

  // Relations

  /**
   * state
   */
  @ManyToOne(() => State, (x) => x.companies)
  @JoinColumn({
    name: 'idState',
  })
  state?: State;

  /**
   * identificationType
   */
  @ManyToOne(() => IdentificationType, (x) => x.companies)
  @JoinColumn({
    name: 'idIdentificationType',
  })
  identificationType?: IdentificationType;

  /**
   * typeCompany
   */
  @ManyToOne(() => TypeCompany, (x) => x.companies)
  @JoinColumn({
    name: 'idTypeCompany',
  })
  typeCompany?: TypeCompany;

  /**
   * companyPerson
   */
  @OneToMany(() => CompanyPerson, (companyPerson) => companyPerson.company)
  companyPerson?: CompanyPerson[];
}
