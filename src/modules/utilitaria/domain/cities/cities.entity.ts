import { LegalRepresentative } from '@app/modules/administration/domain/legalReprensentative/legalRepresentative.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  /**
   * legalRepresentative
   */
  @OneToMany(() => LegalRepresentative, (x) => x?.cities)
  legalRepresentatives?: LegalRepresentative[];
}
