import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateOfferingInput {
  @Field(() => Float, { description: 'amount of tithe' })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @Field(() => String, { description: 'date of tithe' })
  @IsNotEmpty()
  date: string;
}
