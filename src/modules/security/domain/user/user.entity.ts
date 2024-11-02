import { Person } from '@app/modules/administration/domain/person/person.entity';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * A class representing a User entity.
 */
@Entity({
  name: 'users',
})
export class User {
  /**
   * User id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * User userName
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  userName: string;

  /**
   * User email
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  email: string;

  /**
   * User password
   */
  @Column({
    type: 'varchar',
  })
  @AutoMap()
  password: string;

  /**
   * User failedAttempts
   */
  @Column({
    type: 'int',
  })
  @AutoMap()
  failedAttempts: number;

  /**
   * User state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create User date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update User date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * Reaction
   */
  /**
   * userSession
   */
  @OneToMany(() => UserSession, (x) => x?.user)
  userSession?: UserSession[];

  /**
   * userRole
   */
  @OneToMany(() => UserRole, (x) => x?.user)
  userRole?: UserRole[];

  /**
   * loginAttempts
   */
  @OneToMany(() => LoginAttempt, (x) => x?.user)
  loginAttempts?: LoginAttempt[];

  /**
   * persons
   */
  @OneToMany(() => Person, (x) => x?.user)
  persons?: Person[];
}
