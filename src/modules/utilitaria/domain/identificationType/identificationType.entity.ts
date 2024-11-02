import { Person } from '@app/modules/administration/domain/person/person.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a identificationType entity.
 */
@Entity({
  name: 'identificationTypes',
})
export class IdentificationType {
  /**
   * IdentificationType id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * IdentificationType name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * IdentificationType acronym
   */
  @Column({
    type: 'varchar',
    length: 4,
  })
  @AutoMap()
  acronym: string;

  /**
   * IdentificationType code
   */
  @Column({
    type: 'varchar',
    length: 10,
  })
  @AutoMap()
  code: string;

  // Relation

  /**
   * persons
   */
  @OneToMany(() => Person, (person) => person.identificationType)
  persons?: Person[];
}
