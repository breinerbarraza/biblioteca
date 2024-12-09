import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubModule } from '../subModule/subModule.entity';

/**
 * A class representing a module entity.
 */
@Entity({
  name: 'module',
})
export class Modules {
  /**
   * module id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Name
   */
  @Column({
    type: 'varchar',
    length: 30,
  })
  @AutoMap()
  name: string;

  /**
   * Description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;

  @OneToMany(() => SubModule, (x) => x?.module)
  subModules?: SubModule[];
}
