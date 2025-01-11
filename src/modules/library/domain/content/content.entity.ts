import { ContentDetail } from '@app/modules/library/domain/contentDetail/contentDetail.entity';
import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * A class representing a Content entity.
 */
@Entity({
  name: 'contents',
})
export class Content {
  /**
   * Content id
   */
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  /**
   * Content idContentDetail
   */
  @Column({
    nullable: true,
  })
  @AutoMap()
  idContentDetail: number;

  /**
   * Content title
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  title: string;

  /**
   * Content description
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  description: string;

  /**
   * Content type
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  type: string;

  /**
   * Content url
   */
  @Column({
    type: 'varchar',
    length: 250,
  })
  @AutoMap()
  url: string;

  /**
   * Person uploadDate
   */
  @Column({
    type: 'date',
  })
  @AutoMap()
  uploadDate: Date;

  /**
   * Content state
   */
  @Column({
    type: 'bool',
    default: true,
  })
  @AutoMap()
  state: boolean;

  /**
   * Create Content date
   */
  @CreateDateColumn()
  @AutoMap()
  createdAt?: Date;

  /**
   * Update Content date
   */
  @UpdateDateColumn()
  @AutoMap()
  updatedAt?: Date;

  /**
   * ContentDetail
   */
  @ManyToOne(() => ContentDetail, (x) => x?.content)
  @JoinColumn({
    name: 'idContentDetail',
  })
  contentDetail?: ContentDetail;
}
