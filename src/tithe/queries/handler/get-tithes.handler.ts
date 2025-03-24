import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Tithe } from '../../entities';
import { TitheService } from '../../tithe.service';
import { GetTithesQuery } from '../impl/get-tithes.query';

@QueryHandler(GetTithesQuery)
export class GetTithesQueryHandler implements IQueryHandler<GetTithesQuery> {
  constructor(private readonly titheService: TitheService) {}

  async execute(): Promise<Tithe[]> {
    return this.titheService.findAll();
  }
}
