import { CommandHandler } from '@nestjs/cqrs';
import { UpdateTitheCommand } from './update-tithe.command';
import { TitheService } from '../../services';

@CommandHandler(UpdateTitheCommand)
export class UpdateTitheHandler {
  constructor(private readonly titheService: TitheService) {}

  async execute(command: UpdateTitheCommand) {
    this.titheService.update(command.id, command.tithe);
  }
}
