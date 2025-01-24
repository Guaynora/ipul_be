import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCommitteeCommand } from './create-committee.command';
import { CommitteeService } from '../../services/committee.service';

@CommandHandler(CreateCommitteeCommand)
export class CreateTitheHandler
  implements ICommandHandler<CreateCommitteeCommand>
{
  constructor(private readonly titheService: CommitteeService) {}

  async execute(command: CreateCommitteeCommand) {
    return this.titheService.create(command.committee);
  }
}
