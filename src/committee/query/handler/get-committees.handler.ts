import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCommitteesQuery } from '../impl/get-committees.query';
import { CommitteeService } from '../../committee.service';
import { Committee } from '../../entities';

@QueryHandler(GetCommitteesQuery)
export class GetCommitteesQueryHandler
  implements IQueryHandler<GetCommitteesQuery>
{
  constructor(private readonly getCommitteesQuery: CommitteeService) {}

  async execute(): Promise<Committee[]> {
    return this.getCommitteesQuery.findAll();
  }
}
