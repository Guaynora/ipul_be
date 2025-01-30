import { QueryHandler } from '@nestjs/cqrs';
import { Offering } from '../../../domain';
import { OfferingService } from '../../services';
import { GetOfferingQuery } from './get-offering.query';

@QueryHandler(GetOfferingQuery)
export class GetOfferingQueryHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(query: GetOfferingQuery): Promise<Offering> {
    return this.offeringService.findOne(query.id);
  }
}
