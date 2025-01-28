import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateTitheCommand,
  UpdateTitheCommand,
} from '../../application/command';
import { CreateTitheInput, UpdateTitheInput } from '../../application/dto';
import { GetTitheQuery, GetTithesQuery } from '../../application/queries';
import { TitheService } from '../../application/services';
import { Tithe } from '../../domain';

@Resolver(() => Tithe)
export class TitheResolver {
  constructor(
    private readonly titheService: TitheService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [Tithe], { name: 'tithes' })
  async findAll() {
    return await this.queryBus.execute(new GetTithesQuery());
  }

  @Query(() => Tithe, { name: 'tithe' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.queryBus.execute(new GetTitheQuery(id));
  }

  @Mutation(() => Tithe)
  async createTithe(
    @Args('createTitheInput') createTitheInput: CreateTitheInput,
  ) {
    return await this.commandBus.execute(
      new CreateTitheCommand(createTitheInput),
    );
  }

  @Mutation(() => Tithe)
  async updateTithe(
    @Args('updateTitheInput') updateTitheInput: UpdateTitheInput,
  ) {
    return await this.commandBus.execute(
      new UpdateTitheCommand(updateTitheInput.id, updateTitheInput),
    );
  }

  @Mutation(() => Tithe)
  async removeTithe(@Args('id', { type: () => ID }) id: string) {
    return await this.titheService.remove(id);
  }
}
