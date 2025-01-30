import { CommandHandler } from '@nestjs/cqrs';
import { OfferingService } from '../../services';
import { UpdateOfferingCommand } from './update-offering.command';

@CommandHandler(UpdateOfferingCommand)
export class UpdateOfferingHandler {
  constructor(private readonly offeringService: OfferingService) {}

  async execute(command: UpdateOfferingCommand) {
    this.offeringService.update(command.id, command.offering);
  }
}
