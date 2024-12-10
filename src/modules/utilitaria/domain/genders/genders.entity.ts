import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a gender entity.
 */
@Entity({
  name: 'genders',
})
export class Genders {
  /**
   * Gender id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Gender name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * Gender description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;

  /**
   * LegalRepresentative
   */
  @OneToMany(() => LegalRepresentative, (x) => x?.genders)
  legalRepresentatives?: LegalRepresentative[];
}
