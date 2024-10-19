import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
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
    length: 20,
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
}
