import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommitteeService } from '../../services/committee.service';
import { CreateCommitteeCommand } from './create-committee.command';

@CommandHandler(CreateCommitteeCommand)
export class CreateCommitteeHandler
  implements ICommandHandler<CreateCommitteeCommand>
{
  constructor(private readonly titheService: CommitteeService) {}

  async execute(command: CreateCommitteeCommand) {
    return this.titheService.create(command.committee);
  }
}
