import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateTitheInput {
  @Field(() => Float, { description: 'amount of tithe' })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Field(() => Date, { description: 'date of tithe' })
  @IsNotEmpty()
  date: Date;
}
