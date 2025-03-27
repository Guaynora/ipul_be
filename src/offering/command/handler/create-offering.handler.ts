import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOfferingCommand } from '../impl/create-offering.command';
import { OfferingService } from '../../offering.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Offering } from '../../entities';
import { Repository } from 'typeorm';

@CommandHandler(CreateOfferingCommand)
export class CreateOfferingHandler
  implements ICommandHandler<CreateOfferingCommand>
{
  constructor(
    private readonly offeringService: OfferingService,
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async execute(command: CreateOfferingCommand) {
    try {
      const tithe = this.offeringRepository.create(command.offering);
      return await this.offeringRepository.save(tithe);
    } catch (error) {
      this.offeringService.handleDBException(error);
    }
  }
}
