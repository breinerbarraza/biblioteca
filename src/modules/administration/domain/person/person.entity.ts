import { User } from '@app/modules/security/domain/user/user.entity';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyPerson } from '../companyPerson/companyPerson.entity';

/**
 * A class representing a person entity.
 */
@Entity({
  name: 'persons',
})
export class Person {
  /**
   * Person id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Person idIdentificationType
   */
  @Column()
  @AutoMap()
  idIdentificationType: number;

  /**
   * Person idCargo
   */
  @Column()
  @AutoMap()
  idCargo: number;

  /**
   * Person idUser
   */
  @Column()
  @AutoMap()
  idUser: number;

  /**
   * Person documentNumber
   */
  @Column({
    type: 'varchar',
    length: 11,
  })
  @AutoMap()
  documentNumber: string;

  /**
   * Person firstName
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  firstName: string;

  /**
   * Person middleName
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @AutoMap()
  middleName: string;

  /**
   * Person firstLastName
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  firstLastName: string;

  /**
   * Person middleLastName
   */
  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  @AutoMap()
  middleLastName: string;

  /**
   * Person fullName
   */
  @Column({
    type: 'varchar',
    length: 250,
    nullable: false,
  })
  @AutoMap()
  fullName: string;

  /**
   * Person dateBirth
   */
  @Column({
    type: 'date',
  })
  @AutoMap()
  dateBirth: Date;

  /**
   * Person phone
   */
  @Column({
    type: 'varchar',
    length: 10,
  })
  @AutoMap()
  phone: string;

  /**
   * Person email
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  email: string;

  /**
   * User state
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
  @ManyToOne(() => IdentificationType, (x) => x.persons)
  @JoinColumn({
    name: 'idIdentificationType',
  })
  identificationType?: IdentificationType;

  /**
   * cargo
   */
  @ManyToOne(() => Cargo, (x) => x.persons)
  @JoinColumn({
    name: 'idCargo',
  })
  cargo?: Cargo;

  /**
   * user
   */
  @OneToOne(() => User, (x) => x.persons)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * companyPerson
   */
  @OneToMany(() => CompanyPerson, (companyPerson) => companyPerson.person)
  companyPerson?: CompanyPerson[];
}
