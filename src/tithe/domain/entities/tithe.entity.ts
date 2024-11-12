import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Tithe {
  @Field(() => ID, { description: 'id of tithe' })
  id: string;

  @Field(() => Int, { description: 'amount of tithe' })
  amount: number;

  @Field(() => Date, { description: 'date of tithe' })
  date: Date;
}
