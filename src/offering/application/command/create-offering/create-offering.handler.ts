import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOfferingCommand } from './create-offering.command';
import { OfferingService } from '../../services';

@CommandHandler(CreateOfferingCommand)
export class CreateOfferingHandler
  implements ICommandHandler<CreateOfferingCommand>
{
  constructor(private readonly offeringService: OfferingService) {}

  async execute(command: CreateOfferingCommand) {
    return this.offeringService.create(command.offering);
  }
}
