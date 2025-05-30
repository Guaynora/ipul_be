import { QueryHandler } from '@nestjs/cqrs';
import { Tithe } from '../../entities';
import { TitheService } from '../../tithe.service';
import { GetTitheQuery } from '../impl/get-tithe.query';

@QueryHandler(GetTitheQuery)
export class GetTitheQueryHandler {
  constructor(private readonly getTitheService: TitheService) {}

  async execute(query: GetTitheQuery): Promise<Tithe> {
    return this.getTitheService.findOne(query.id);
  }
}
