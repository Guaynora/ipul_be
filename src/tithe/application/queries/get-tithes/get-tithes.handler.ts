import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTithesQuery } from './get-tithes.query';
import { TitheService } from '../../services';
import { Tithe } from '../../../domain';

@QueryHandler(GetTithesQuery)
export class GetTithesQueryHandler implements IQueryHandler<GetTithesQuery> {
  constructor(private readonly titheService: TitheService) {}

  async execute(): Promise<Tithe[]> {
    return this.titheService.findAll();
  }
}
