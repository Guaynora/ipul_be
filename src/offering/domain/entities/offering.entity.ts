import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Field(() => Date, { description: 'date of created committee' })
  createdAt: Date;

  @Column({ type: 'float', default: 0, nullable: false })
  @Field(() => Float, { description: 'amount of tithe' })
  amount: number;

  @Column('text')
  @Field(() => String, { description: 'date of tithe' })
  date: string;
}
