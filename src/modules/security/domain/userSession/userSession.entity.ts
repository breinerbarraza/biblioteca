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
 * A class representing a UserSession entity.
 */
@Entity({
  name: 'userSessions',
})
export class UserSession {
  /**
   * UserSession id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * UserSession idUser
   */
  @Column({
    type: 'int',
  })
  @AutoMap()
  idUser: number;

  /**
   * UserSession sessionStart
   */
  @Column({
    type: 'date',
  })
  @AutoMap()
  sessionStart: Date;

  /**
   * UserSession sessionEnd
   */
  @Column({
    type: 'date',
    nullable: true,
  })
  @AutoMap()
  sessionEnd: Date;

  /**
   * UserSession pcName
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  pcName: string;

  /**
   * UserSession ipAddress
   */
  @Column({
    type: 'varchar',
    length: 12,
  })
  @AutoMap()
  ipAddress: string;

  /**
   * UserSession duration
   */
  @Column({
    type: 'int',
    nullable: true,
  })
  @AutoMap()
  duration: number;

  /**
   * Reaction
   */
  /**
   * user
   */
  @ManyToOne(() => User, (x) => x?.userSession)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;
}
