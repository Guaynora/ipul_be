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

  @Column()
  @Field(() => String, { description: 'date of tithe' })
  date: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Field(() => Date, { description: 'date of created tithe' })
  createdAt: Date;
}
