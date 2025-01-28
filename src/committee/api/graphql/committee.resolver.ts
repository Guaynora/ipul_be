import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateCommitteeCommand,
  UpdateCommitteeCommand,
} from '../../application/command';
import {
  CreateCommitteeInput,
  UpdateCommitteeInput,
} from '../../application/dto';
import {
  GetCommitteeQuery,
  GetCommitteesQuery,
} from '../../application/queries';
import { Committee } from '../../domain';

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

  @Mutation(() => Committee)
  async updateCommittee(
    @Args('updateCommitteeInput') updateCommitteeInput: UpdateCommitteeInput,
  ) {
    return await this.commandBus.execute(
      new UpdateCommitteeCommand(updateCommitteeInput.id, updateCommitteeInput),
    );
  }
}
