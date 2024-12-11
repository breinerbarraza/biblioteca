import { Company } from '@app/modules/administration/domain/company/company.entity';
import { LegalRepresentative } from '@app/modules/administration/domain/legalRepresentative/legalRepresentative.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a State entity.
 */
@Entity({
  name: 'states',
})
export class State {
  /**
   * State id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * State name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * State description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;

  // Relation

  /**
   * company
   */
  @OneToMany(() => Company, (person) => person.state)
  companies?: Company[];

  /**
   * LegalRepresentative
   */
  @OneToMany(() => LegalRepresentative, (x) => x?.state)
  legalRepresentative?: LegalRepresentative[];
}
