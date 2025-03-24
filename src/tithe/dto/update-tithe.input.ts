import { IsUUID } from 'class-validator';
import { CreateTitheInput } from './create-tithe.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTitheInput extends PartialType(CreateTitheInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
