import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Tithe } from '../../../domain';
import { TitheService } from '../../services';
import { GetTithesQuery } from './get-tithes.query';

@QueryHandler(GetTithesQuery)
export class GetTithesQueryHandler implements IQueryHandler<GetTithesQuery> {
  constructor(private readonly titheService: TitheService) {}

  async execute(): Promise<Tithe[]> {
    return this.titheService.findAll();
  }
}
