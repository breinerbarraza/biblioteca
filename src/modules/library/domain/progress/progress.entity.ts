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
 * A class representing a Progress entity.
 */
@Entity({
  name: 'progress',
})
export class Progress {
  /**
   * Progress id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
    * Progress dateLastAccess
    */
  @Column({
    type: 'date',
  })
  @AutoMap()
  dateLastAccess: Date;

  /**
   * Progress idUser
   */
  @Column()
  @AutoMap()
  idUser: number;

  /**
   * Progress idContent
   */
  @Column()
  @AutoMap()
  idContent: number;

  /**
   * Progress percentage
   */
  @Column({
    type: 'float',
  })
  @AutoMap()
  percentage: number;


  /**
   * Progress state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create Progress date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update Progress date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * User
   */
  @ManyToOne(() => User, (x) => x?.progress)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * Progress
   */
  @ManyToOne(() => Content, (x) => x?.progress)
  @JoinColumn({
    name: 'idContent',
  })
  content?: Content;
}
