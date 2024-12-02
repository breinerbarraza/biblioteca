import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Modules } from '../modulos/modules.entity';
import { Menu } from '../menu/menu.entity';

/**
 * A class representing a subModule entity.
 */
@Entity({
  name: 'subModule',
})
export class SubModule {
  /**
   * subModule id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * idModule
   */
  @Column()
  @AutoMap()
  idModule: number;

  /**
   * name
   */
  @Column({
    type: 'varchar',
    length: 30,
  })
  @AutoMap()
  name: string;

  /**
   * description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;

  // Relations

  /**
   * module
   */
  @ManyToOne(() => Modules, (x) => x?.subModules)
  @JoinColumn({
    name: 'idModule',
  })
  module?: Modules;

  /**
   * menu
   */
  @OneToMany(() => Menu, (x) => x?.subModule)
  menu?: Menu[];
}
