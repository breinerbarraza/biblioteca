import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a cities entity.
 */
@Entity({
  name: 'cities',
})
export class Cities {
  /**
   * cities id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * cities name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * cities description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  codigo: string;
}
