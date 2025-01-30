import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommitteeResolver } from './api/graphql/committee.resolver';
import {
  CreateCommitteeHandler,
  UpdateCommitteeHandler,
} from './application/command';
import {
  GetCommitteeQueryHandler,
  GetCommitteesQueryHandler,
} from './application/queries';
import { CommitteeService } from './application/services';
import { Committee } from './domain';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Committee])],
  providers: [
    CommitteeResolver,
    CommitteeService,
    CreateCommitteeHandler,
    UpdateCommitteeHandler,
    GetCommitteeQueryHandler,
    GetCommitteesQueryHandler,
  ],
  exports: [TypeOrmModule],
})
export class CommitteeModule {}
