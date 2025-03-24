import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOfferingCommand } from '../impl/create-offering.command';
import { OfferingService } from '../../offering.service';

@CommandHandler(CreateOfferingCommand)
export class CreateOfferingHandler
  implements ICommandHandler<CreateOfferingCommand>
{
  constructor(private readonly offeringService: OfferingService) {}

  async execute(command: CreateOfferingCommand) {
    return this.offeringService.create(command.offering);
  }
}
