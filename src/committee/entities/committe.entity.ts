import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Offering } from '../../offering/domain';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'committee' })
@ObjectType()
export class Committee {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id of committee' })
  id: string;

  @Column({ type: 'text', nullable: false })
  @Field(() => String, { description: 'name of committee' })
  name: string;

  @Column('text')
  @Field(() => String, { description: 'description of committee' })
  description: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date, { description: 'date of created committee' })
  createdAt: Date;

  @OneToMany(() => Offering, (offering) => offering.committee)
  offerings: Offering[];
}
