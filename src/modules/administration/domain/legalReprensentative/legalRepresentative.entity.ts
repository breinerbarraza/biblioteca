import { Company } from '@app/modules/administration/domain/company/company.entity';
import { Cities } from '@app/modules/utilitaria/domain/cities/cities.entity';
import { Genders } from '@app/modules/utilitaria/domain/genders/genders.entity';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * A class representing a LegalRepresentative entity.
 */
@Entity({
  name: 'legalRepresentative',
})
export class LegalRepresentative {
  /**
   * LegalRepresentative id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * LegalRepresentative idGender
   */
  @Column()
  @AutoMap()
  idGender: number;

  /**
   * LegalRepresentative idCity
   */
  @Column()
  @AutoMap()
  idCity: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @Column()
  @AutoMap()
  idIdentificationType: number;

  /**
   * LegalRepresentative  idCompany
   */
  @Column()
  @AutoMap()
  idCompany: number;

  /**
   * LegalRepresentative idIdentificationType
   */
  @Column()
  @AutoMap()
  identificationNumber: number;

  /**
   * LegalRepresentative name
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  name: string;

  /**
   * LegalRepresentative middle_name
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  middleName: string;

  /**
   * LegalRepresentative firstSurname
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  firstSurname: string;

  /**
   * LegalRepresentative secondLastName
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  secondSurname: string;

  /**
   * LegalRepresentative fullName
   */
  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  @AutoMap()
  fullName: string;

  /**
   * LegalRepresentative email
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  email: string;

  /**
   * LegalRepresentative phone
   */
  @Column({
    type: 'varchar',
    length: 60,
  })
  @AutoMap()
  phone: string;

  /**
   * LegalRepresentative state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  // Relations

  /**
   * identificationType
   */
  @ManyToOne(() => IdentificationType, (x) => x?.legalRepresentative)
  @JoinColumn({
    name: 'idIdentificationType',
  })
  identificationType?: IdentificationType;

  /**
   * company
   */
  @OneToOne(() => Company, (x) => x?.legalRepresentative)
  @JoinColumn({
    name: 'idCompany',
  })
  company?: Company;

  /**
   * Cities
   */
  @ManyToOne(() => Cities, (x) => x?.legalRepresentatives)
  @JoinColumn({
    name: 'idCities',
  })
  cities?: Cities;

  /**
   * identificationType
   */
  @ManyToOne(() => Genders, (x) => x?.legalRepresentatives)
  @JoinColumn({
    name: 'idGenders',
  })
  genders?: Genders;
}
