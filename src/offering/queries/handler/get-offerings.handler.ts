import { QueryHandler } from '@nestjs/cqrs';
import { Offering } from '../../entities';
import { OfferingService } from '../../offering.service';
import { GetOfferingsQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(GetOfferingsQuery)
export class GetOfferingsQueryHandler {
  constructor(
    private readonly offeringService: OfferingService,
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async execute(): Promise<Offering[]> {
    try {
      return await this.offeringRepository.find();
    } catch (error) {
      this.offeringService.handleDBException(error);
    }
  }
}
