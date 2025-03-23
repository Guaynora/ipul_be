import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCommitteeQuery } from '../impl/get-committee.query';
import { CommitteeService } from '../../committee.service';
import { Committee } from '../../entities';

@QueryHandler(GetCommitteeQuery)
export class GetCommitteeQueryHandler
  implements IQueryHandler<GetCommitteeQuery>
{
  constructor(private readonly getCommitteeService: CommitteeService) {}

  async execute(query: GetCommitteeQuery): Promise<Committee> {
    return this.getCommitteeService.findOne(query.id);
  }
}
