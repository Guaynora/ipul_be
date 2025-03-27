import { QueryHandler } from '@nestjs/cqrs';
import { Offering } from '../../entities';
import { GetOfferingQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetOfferingQuery)
export class GetOfferingQueryHandler {
  constructor(
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async execute(query: GetOfferingQuery): Promise<Offering> {
    const tithe = await this.offeringRepository.findOneBy({ id: query.id });
    if (!tithe) {
      throw new NotFoundException(`Offering with id ${query.id} not found`);
    }
    return tithe;
  }
}
