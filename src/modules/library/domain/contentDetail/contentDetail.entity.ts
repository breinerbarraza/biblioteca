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
  UpdateDateColumn,
} from 'typeorm';
import { LogAccess } from '../logAccess/logAccess.entity';
import { Progress } from '../progress/progress.entity';
import { SubModule } from '@app/modules/administration/domain/subModule/subModule.entity';
import { Content } from '@app/modules/library/domain/content/content.entity';

/**
 * A class representing a ContentDetail entity.
 */
@Entity({
  name: 'contentDetails',
})
export class ContentDetail {
  /**
   * ContentDetail id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * ContentDetail title
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  title: string;

  /**
   * ContentDetail description
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  description: string;

  /**
   * ContentDetail idUser
   */
  @Column()
  @AutoMap()
  idUser: number;

  /**
   * ContentDetail idSubModule
   */
  @Column({
    nullable: true,
  })
  @AutoMap()
  idSubModule: number;

  /**
   * Person uploadDate
   */
  @Column({
    type: 'date',
  })
  @AutoMap()
  uploadDate: Date;

  /**
   * ContentDetail state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create ContentDetail date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update ContentDetail date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * User
   */
  @ManyToOne(() => User, (x) => x?.contentDetail)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * subModule
   */
  @ManyToOne(() => SubModule, (x) => x?.content)
  @JoinColumn({
    name: 'idSubModule',
  })
  subModule?: SubModule;

  /**
   * LogAccess
   */
  @OneToMany(() => LogAccess, (x) => x?.contentDetail)
  logAccess?: LogAccess;

  /**
   * Progress
   */
  @OneToMany(() => Progress, (x) => x?.contentDetail)
  progress?: Progress;

  /**
   * Progress
   */
  @OneToMany(() => Content, (x) => x?.contentDetail)
  content?: Content[];
}
