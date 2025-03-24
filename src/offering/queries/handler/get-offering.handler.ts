import { QueryHandler } from '@nestjs/cqrs';
import { Offering } from '../../entities';
import { OfferingService } from '../../offering.service';
import { GetOfferingQuery } from '../impl';

@QueryHandler(GetOfferingQuery)
export class GetOfferingQueryHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(query: GetOfferingQuery): Promise<Offering> {
    return this.offeringService.findOne(query.id);
  }
}
