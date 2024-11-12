import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Tithe } from '../../domain';
import { TitheService } from '../../application/services';
import { CreateTitheInput, UpdateTitheInput } from '../../application/dto';

@Resolver(() => Tithe)
export class TitheResolver {
  constructor(private readonly titheService: TitheService) {}

  @Query(() => [Tithe], { name: 'tithe' })
  findAll() {
    return this.titheService.findAll();
  }

  @Query(() => Tithe, { name: 'tithe' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.titheService.findOne(id);
  }

  @Mutation(() => Tithe)
  createTithe(@Args('createTitheInput') createTitheInput: CreateTitheInput) {
    return this.titheService.create(createTitheInput);
  }

  @Mutation(() => Tithe)
  updateTithe(@Args('updateTitheInput') updateTitheInput: UpdateTitheInput) {
    return this.titheService.update(updateTitheInput.id, updateTitheInput);
  }

  @Mutation(() => Tithe)
  removeTithe(@Args('id', { type: () => ID }) id: string) {
    return this.titheService.remove(id);
  }
}
