import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { CreateCommitteeInput } from './create-committee.input';

@InputType()
export class UpdateCommitteeInput extends PartialType(CreateCommitteeInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
