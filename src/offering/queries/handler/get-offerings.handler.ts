import { QueryHandler } from '@nestjs/cqrs';
import { Offering } from '../../entities';
import { OfferingService } from '../../offering.service';
import { GetOfferingsQuery } from '../impl';

@QueryHandler(GetOfferingsQuery)
export class GetOfferingsQueryHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(): Promise<Offering[]> {
    return this.offeringService.findAll();
  }
}
