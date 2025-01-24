import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCommitteeInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field(() => String, { description: 'description' })
  description: string;
}
