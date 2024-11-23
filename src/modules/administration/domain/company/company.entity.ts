import { IdentificationType } from '@app/modules/utilitaria/domain/identificationType/identificationType.entity';
import { State } from '@app/modules/utilitaria/domain/state/state.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
   * Company dv
   */
  @Column({
    type: 'varchar',
    length: 1,
  })
  @AutoMap()
  dv: string;

  /**
   * Company business_name
   */
  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  @AutoMap()
  business_name: string;

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
    nullable: true,
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
}
