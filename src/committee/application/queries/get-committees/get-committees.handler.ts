import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Committee } from '../../../domain';
import { CommitteeService } from '../../services/committee.service';
import { GetCommitteesQuery } from './get-committees.query';

@QueryHandler(GetCommitteesQuery)
export class GetCommitteesQueryHandler
  implements IQueryHandler<GetCommitteesQuery>
{
  constructor(private readonly getCommitteesQuery: CommitteeService) {}

  async execute(): Promise<Committee[]> {
    return this.getCommitteesQuery.findAll();
  }
}
