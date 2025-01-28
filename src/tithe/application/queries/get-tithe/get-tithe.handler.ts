import { QueryHandler } from '@nestjs/cqrs';
import { Tithe } from 'src/tithe/domain';
import { TitheService } from '../../services';
import { GetTitheQuery } from './get-tithe.query';

@QueryHandler(GetTitheQuery)
export class GetTitheQueryHandler {
  constructor(private readonly getTitheService: TitheService) {}

  async execute(query: GetTitheQuery): Promise<Tithe> {
    return this.getTitheService.findOne(query.id);
  }
}
