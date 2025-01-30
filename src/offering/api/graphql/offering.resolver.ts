import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Offering } from '../../domain';
import { GetOfferingQuery, GetOfferingsQuery } from '../../application/queries';
import {
  CreateOfferingInput,
  UpdateOfferingInput,
} from '../../application/dto';
import {
  CreateOfferingCommand,
  UpdateOfferingCommand,
} from 'src/offering/application/command';

@Resolver()
export class OfferingResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [Offering], { name: 'offerings' })
  async findAll() {
    return await this.queryBus.execute(new GetOfferingsQuery());
  }

  @Query(() => Offering, { name: 'offering' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.queryBus.execute(new GetOfferingQuery(id));
  }

  @Mutation(() => Offering)
  async createOffering(
    @Args('createOfferingInput') createOfferingInput: CreateOfferingInput,
  ) {
    return await this.commandBus.execute(
      new CreateOfferingCommand(createOfferingInput),
    );
  }

  @Mutation(() => Offering)
  async updateOffering(
    @Args('updateOfferingInput') updateOfferingInput: UpdateOfferingInput,
  ) {
    return await this.commandBus.execute(
      new UpdateOfferingCommand(updateOfferingInput.id, updateOfferingInput),
    );
  }
}
