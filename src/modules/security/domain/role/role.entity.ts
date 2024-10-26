import { UserRole } from '@app/modules/security/domain/userRole/userRole.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a Role entity.
 */
@Entity({
  name: 'roles',
})
export class Role {
  /**
   * Role id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Role name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * Role description
   */
  @Column({
    type: 'varchar',
    length: 100,
  })
  @AutoMap()
  description: string;

  /**
   * Role state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Reaction
   */
  /**
   * userRole
   */
  @OneToMany(() => UserRole, (x) => x?.role)
  userRole?: UserRole[];
}
