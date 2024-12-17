import { User } from '@app/modules/security/domain/user/user.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Content } from '../content/content.entity';

/**
 * A class representing a LogAccess entity.
 */
@Entity({
  name: 'logAccess',
})
export class LogAccess {
  /**
   * LogAccess id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
    * LogAccess accessDate
    */
  @Column({
    type: 'date',
  })
  @AutoMap()
  accessDate: Date;

  /**
   * LogAccess idUser
   */
  @Column()
  @AutoMap()
  idUser: number;

  /**
   * LogAccess idContent
   */
  @Column()
  @AutoMap()
  idContent: number;


  /**
   * LogAccess state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create LogAccess date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update LogAccess date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * User
   */
  @ManyToOne(() => User, (x) => x?.logAccess)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * LogAccess
   */
  @ManyToOne(() => Content, (x) => x?.logAccess)
  @JoinColumn({
    name: 'idContent',
  })
  content?: Content;
}
