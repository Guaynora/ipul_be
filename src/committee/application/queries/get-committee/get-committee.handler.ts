import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Committee } from '../../../domain';
import { CommitteeService } from '../../services/committee.service';
import { GetCommitteeQuery } from './get-committee.query';

@QueryHandler(GetCommitteeQuery)
export class GetCommitteeQueryHandler
  implements IQueryHandler<GetCommitteeQuery>
{
  constructor(private readonly getCommitteeService: CommitteeService) {}

  async execute(query: GetCommitteeQuery): Promise<Committee> {
    return this.getCommitteeService.findOne(query.id);
  }
}
