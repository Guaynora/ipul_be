import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { TithesService } from './tithes.service';
import { Tithe } from './entities/tithe.entity';
import { CreateTitheInput, UpdateTitheInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Tithe)
export class TithesResolver {
  constructor(private readonly tithesService: TithesService) { }

  @Mutation(() => Tithe)
  async createTithe(@Args('createTitheInput') createTitheInput: CreateTitheInput): Promise<Tithe> {
    return this.tithesService.create(createTitheInput);
  }

  @Query(() => [Tithe], { name: 'tithes' })
  async findAll(): Promise<Tithe[]> {
    return this.tithesService.findAll();
  }

  @Query(() => Tithe, { name: 'tithe' })
  async findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Tithe> {
    return this.tithesService.findOne(id);
  }

  @Mutation(() => Tithe)
  async updateTithe(@Args('updateTitheInput') updateTitheInput: UpdateTitheInput): Promise<Tithe> {
    return this.tithesService.update(updateTitheInput.id, updateTitheInput);
  }

  @Mutation(() => Tithe)
  removeTithe(@Args('id', { type: () => Int }) id: number) {
    return this.tithesService.remove(id);
  }
}
