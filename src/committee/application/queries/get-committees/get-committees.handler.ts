import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCommitteesQuery } from './get-committees.query';
import { CommitteeService } from '../../services/committee.service';
import { Committee } from '../../../domain';

@QueryHandler(GetCommitteesQuery)
export class GetCommitteesQueryHandler
  implements IQueryHandler<GetCommitteesQuery>
{
  constructor(private readonly getCommitteesQuery: CommitteeService) {}

  async execute(): Promise<Committee[]> {
    return this.getCommitteesQuery.findAll();
  }
}
