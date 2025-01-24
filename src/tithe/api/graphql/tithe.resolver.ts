import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Tithe } from '../../domain';
import { TitheService } from '../../application/services';
import { CreateTitheInput, UpdateTitheInput } from '../../application/dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetTithesQuery } from '../../application/queries';
import { CreateTitheCommand } from '../../application/command';

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
    return this.titheService.findOne(id);
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
    return await this.titheService.update(
      updateTitheInput.id,
      updateTitheInput,
    );
  }

  @Mutation(() => Tithe)
  async removeTithe(@Args('id', { type: () => ID }) id: string) {
    return await this.titheService.remove(id);
  }
}
