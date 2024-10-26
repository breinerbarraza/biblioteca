import { User } from '@app/modules/security/domain/user/user.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * A class representing a loginAttempt entity.
 */
@Entity({
  name: 'loginAttempts',
})
export class LoginAttempt {
  /**
   * LoginAttempt id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * UserRole idUser
   */
  @Column({
    type: 'int',
  })
  @AutoMap()
  idUser: number;

  /**
   * LoginAttempt attemptsAt
   */
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  @AutoMap()
  attemptsAt: Date;

  /**
   * LoginAttempt successful
   */
  @Column({
    type: 'bool',
  })
  @AutoMap()
  successful: boolean;

  /**
   * LoginAttempt ipAddress
   */
  @Column({
    type: 'varchar',
    length: 12,
  })
  @AutoMap()
  ipAddress: string;

  /**
   * LoginAttempt pcName
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  pcName: string;

  /**
   * Reaction
   */
  /**
   * user
   */
  @ManyToOne(() => User, (x) => x?.loginAttempts)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;
}
