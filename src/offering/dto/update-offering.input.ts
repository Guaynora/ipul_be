import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { CreateOfferingInput } from './create-offering.input';

@InputType()
export class UpdateOfferingInput extends PartialType(CreateOfferingInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
