import { User } from '@app/modules/security/domain/user/user.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { LogAccess } from '../logAccess/logAccess.entity';
import { Progress } from '../progress/progress.entity';

/**
 * A class representing a Content entity.
 */
@Entity({
  name: 'contents',
})
export class Content {
  /**
   * Content id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Content title
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  title: string;

  /**
   * Content description
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  description: string;

  /**
   * Content idUser
   */
  @Column()
  @AutoMap()
  idUser: number;

  /**
   * Content type
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  type: string;

  /**
   * Content url
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()

  url: string;

  /**
    * Person uploadDate
    */
  @Column({
    type: 'date',
  })
  @AutoMap()
  uploadDate: Date;

  /**
   * Content state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create Content date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update Content date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * User
   */
  @ManyToOne(() => User, (x) => x?.content)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * LogAccess
   */
  @OneToMany(() => LogAccess, (x) => x?.content)
  logAccess?: LogAccess;

  /**
   * Progress
   */
  @OneToMany(() => Progress, (x) => x?.content)
  progress?: Progress;
}
