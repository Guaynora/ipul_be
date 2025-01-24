import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Committee } from '../../domain';
import { CreateCommitteeInput } from '../../application/dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  GetCommitteesQuery,
  GetCommitteeQuery,
} from '../../application/queries';
import { CreateCommitteeCommand } from 'src/committee/application/command';

@Resolver(() => Committee)
export class CommitteeResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [Committee], { name: 'committees' })
  async findAll() {
    return await this.queryBus.execute(new GetCommitteesQuery());
  }

  @Query(() => Committee, { name: 'committee' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.queryBus.execute(new GetCommitteeQuery(id));
  }

  @Mutation(() => Committee)
  async createCommittee(
    @Args('createCommitteeInput') createCommitteeInput: CreateCommitteeInput,
  ) {
    return await this.commandBus.execute(
      new CreateCommitteeCommand(createCommitteeInput),
    );
  }
}
