import { Field, Float, GraphQLISODateTime, InputType } from "@nestjs/graphql";
import { IsDate, IsNotEmpty, IsPositive } from "class-validator";

@InputType()
export class CreateTitheInput {
  @Field(() => Float)
  @IsNotEmpty()
  @IsPositive()
  amount: number;

  @Field(() => GraphQLISODateTime)
  @IsDate()
  createAt: Date;
}
