import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tithe' })
@ObjectType()
export class Tithe {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID, { description: 'id of tithe' })
  id: string;

  @Column({ type: 'float' })
  @Field(() => Float, { description: 'amount of tithe' })
  amount: number;

  @Column({ type: 'date' })
  @Field(() => Date, { description: 'date of tithe' })
  date: Date;
}
