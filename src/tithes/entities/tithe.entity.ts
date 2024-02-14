import { ObjectType, Field, ID, Float, GraphQLISODateTime } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tithes' })
@ObjectType()
export class Tithe {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column("decimal", { precision: 6, scale: 2 })
  @Field(() => Float)
  amount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => GraphQLISODateTime)
  createAt: Date;
}
