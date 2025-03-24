import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TitheService } from '../../tithe.service';
import { CreateTitheCommand } from '../impl/create-tithe.command';

@CommandHandler(CreateTitheCommand)
export class CreateTitheHandler implements ICommandHandler<CreateTitheCommand> {
  constructor(private readonly titheService: TitheService) {}

  async execute(command: CreateTitheCommand) {
    return this.titheService.create(command.tithe);
  }
}
