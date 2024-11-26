import { User } from '@app/modules/security/domain/user/user.entity';
import { Cargo } from '@app/modules/utilitaria/domain/cargo/cargo.entity';
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
   * Person idState
   */
  @Column()
  @AutoMap()
  idState: number;

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
   * Person name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

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
   * Person firstSurname
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  firstSurname: string;

  /**
   * Person secondSurname
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
    nullable: true,
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

  // Relations

  /**
   * state
   */
  @ManyToOne(() => State, (x) => x.persons)
  @JoinColumn({
    name: 'idState',
  })
  state?: State;

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
  @ManyToOne(() => User, (x) => x.persons)
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
