import { Company } from '@app/modules/administration/domain/company/company.entity';
import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * A class representing a typeCompany entity.
 */
@Entity({
  name: 'typeCompanies',
})
export class TypeCompany {
  /**
   * TypeCompany id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * TypeCompany name
   */
  @Column({
    type: 'varchar',
    length: 20,
  })
  @AutoMap()
  name: string;

  /**
   * TypeCompany description
   */
  @Column({
    type: 'varchar',
    length: 50,
  })
  @AutoMap()
  description: string;

  // Relation

  /**
   * companies
   */
  @OneToMany(() => Company, (x) => x.typeCompany)
  companies?: Company[];
}
