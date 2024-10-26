import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a cargo entity.
 */
@Entity({
  name: 'cargos',
})
export class Cargo {
  /**
   * Cargo id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Cargo name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * Cargo description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;
}
