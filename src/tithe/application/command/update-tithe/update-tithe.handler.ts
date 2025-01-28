import { CommandHandler } from '@nestjs/cqrs';
import { TitheService } from '../../services';
import { UpdateTitheCommand } from './update-tithe.command';

@CommandHandler(UpdateTitheCommand)
export class UpdateTitheHandler {
  constructor(private readonly titheService: TitheService) {}

  async execute(command: UpdateTitheCommand) {
    this.titheService.update(command.id, command.tithe);
  }
}
