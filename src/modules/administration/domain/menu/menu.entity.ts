import { AutoMap } from '@automapper/classes';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubModule } from '../subModule/subModule.entity';

/**
 * A class representing a company entity.
 */
@Entity({
  name: 'menus',
})
export class Menu {
  /**
   * Menu id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * idSubModule
   */
  @Column()
  @AutoMap()
  idSubModule: number;

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

  /**
   * description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  url: string;

  // Relations
  /**
   * subModule
   */
  @ManyToOne(() => SubModule, (x) => x?.menu)
  @JoinColumn({
    name: 'idSubModule',
  })
  subModule?: SubModule;
}
