import { CommandHandler } from '@nestjs/cqrs';
import { OfferingService } from '../../offering.service';
import { UpdateOfferingCommand } from '../impl/update-offering.command';

@CommandHandler(UpdateOfferingCommand)
export class UpdateOfferingHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(command: UpdateOfferingCommand) {
    this.offeringService.update(command.id, command.offering);
  }
}
