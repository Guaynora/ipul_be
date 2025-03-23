import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Committee } from '../../../committee/entities';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'offering' })
@ObjectType()
export class Offering {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id of offering' })
  id: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date, { description: 'date of created offering' })
  createdAt: Date;

  @Column({ type: 'float', default: 0, nullable: false })
  @Field(() => Float, { description: 'amount of offering' })
  amount: number;

  @Column('text')
  @Field(() => String, { description: 'date of offering' })
  date: string;

  @ManyToOne(() => Committee, (committee) => committee.offerings, {
    nullable: true,
  })
  @Field(() => Committee, { description: 'Committee related to the offering' })
  committee: Committee;
}
