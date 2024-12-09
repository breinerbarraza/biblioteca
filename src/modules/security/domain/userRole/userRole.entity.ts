import { Role } from '@app/modules/security/domain/role/role.entity';
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
 * A class representing a UserRole entity.
 */
@Entity({
  name: 'userRoles',
})
export class UserRole {
  /**
   * UserRole id
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
   * UserRole idRole
   */
  @Column({
    type: 'int',
  })
  @AutoMap()
  idRole: number;

  /**
   * UserRole assignDate
   */
  @Column({
    type: 'timestamp',
    nullable: true,
    default: new Date(),
  })
  @AutoMap()
  assignDate: Date;

  /**
   * Reaction
   */
  /**
   * user
   */

  /**
   * user
   */
  @ManyToOne(() => User, (x) => x?.userRole)
  @JoinColumn({
    name: 'idUser',
  })
  user?: User;

  /**
   * user
   */
  @ManyToOne(() => Role, (x) => x?.userRole)
  @JoinColumn({
    name: 'idRole',
  })
  role?: User;
}
