import { CommandHandler } from '@nestjs/cqrs';
import { OfferingService } from '../../offering.service';
import { UpdateOfferingCommand } from '../impl/update-offering.command';
import { InjectRepository } from '@nestjs/typeorm';
import { Offering } from '../../entities';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateOfferingCommand)
export class UpdateOfferingHandler {
  constructor(
    private readonly offeringService: OfferingService,
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async execute(command: UpdateOfferingCommand) {
    const tithe = await this.offeringRepository.preload({
      id: command.id,
      ...command.offering,
    });
    if (!tithe) {
      throw new NotFoundException(`Offering with id ${command.id} not found`);
    }
    try {
      return await this.offeringRepository.save(tithe);
    } catch (error) {
      this.offeringService.handleDBException(error);
    }
    this.offeringService.update(command.id, command.offering);
  }
}
