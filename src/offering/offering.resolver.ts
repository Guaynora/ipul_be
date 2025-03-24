import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOfferingCommand, UpdateOfferingCommand } from './command/impl';
import { CreateOfferingInput, UpdateOfferingInput } from './dto';
import { Offering } from './entities';
import { GetOfferingQuery, GetOfferingsQuery } from './queries/impl';

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
