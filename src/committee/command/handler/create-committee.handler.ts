import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCommitteeCommand } from '../impl';
import { CommitteeService } from '../../committee.service';

@CommandHandler(CreateCommitteeCommand)
export class CreateCommitteeHandler
  implements ICommandHandler<CreateCommitteeCommand>
{
  constructor(private readonly titheService: CommitteeService) {}

  async execute(command: CreateCommitteeCommand) {
    return this.titheService.create(command.committee);
  }
}
