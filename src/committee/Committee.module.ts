import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CreateCommitteeHandler,
  UpdateCommitteeHandler,
} from './command/handler';
import { CommitteeResolver } from './committee.resolver';
import { CommitteeService } from './committee.service';
import { Committee } from './entities';
import {
  GetCommitteeQueryHandler,
  GetCommitteesQueryHandler,
} from './query/handler';

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
})
export class CommitteeModule {}
