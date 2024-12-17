import { Person } from '@app/modules/administration/domain/person/person.entity';
import { Content } from '@app/modules/library/domain/content/content.entity';
import { LogAccess } from '@app/modules/library/domain/logAccess/logAccess.entity';
import { Progress } from '@app/modules/library/domain/progress/progress.entity';
import { LoginAttempt } from '@app/modules/security/domain/loginAttempt/loginAttempt.entity';
import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { UserSession } from '@app/modules/security/domain/userSession/userSession.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
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
   * User token
   */
  @Column({
    type: 'varchar',
    nullable: true,
  })
  @AutoMap()
  token: string;

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
   * content
   */
  @OneToMany(() => Content, (x) => x?.user)
  content?: Content;

  /**
   * content
   */
  @OneToMany(() => Progress, (x) => x?.user)
  progress?: Progress;

  /**
   * content
   */
  @OneToMany(() => LogAccess, (x) => x?.user)
  logAccess?: LogAccess;

  /**
   * persons
   */
  @OneToOne(() => Person, (x) => x?.user)
  persons?: Person;
}
