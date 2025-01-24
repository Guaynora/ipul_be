import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCommitteeQuery } from './get-committee.query';
import { CommitteeService } from '../../services/committee.service';
import { Committee } from '../../../domain';

@QueryHandler(GetCommitteeQuery)
export class GetByIdCommitteeQueryHandler
  implements IQueryHandler<GetCommitteeQuery>
{
  constructor(private readonly getCommitteesQuery: CommitteeService) {}

  async execute(query: GetCommitteeQuery): Promise<Committee> {
    return this.getCommitteesQuery.findOne(query.id);
  }
}
