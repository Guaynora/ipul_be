import { QueryHandler } from '@nestjs/cqrs';
import { GetOfferingsQuery } from './get-offerings.query';
import { Offering } from '../../../domain';
import { OfferingService } from '../../services';

@QueryHandler(GetOfferingsQuery)
export class GetOfferingsQueryHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(): Promise<Offering[]> {
    return this.offeringService.findAll();
  }
}
