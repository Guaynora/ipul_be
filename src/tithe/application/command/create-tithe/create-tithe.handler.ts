import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTitheCommand } from './create-tithe.command';
import { TitheService } from '../../services';

@CommandHandler(CreateTitheCommand)
export class CreateTitheHandler implements ICommandHandler<CreateTitheCommand> {
  constructor(private readonly titheService: TitheService) {}

  async execute(command: CreateTitheCommand) {
    this.titheService.create(command.tithe);
  }
}
