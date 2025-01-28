import { CommandHandler } from '@nestjs/cqrs';
import { CommitteeService } from '../../services';
import { UpdateCommitteeCommand } from './update-committee.command';

@CommandHandler(UpdateCommitteeCommand)
export class UpdateCommitteeHandler {
  constructor(private readonly committeService: CommitteeService) {}

  async execute(command: UpdateCommitteeCommand) {
    this.committeService.update(command.id, command.committee);
  }
}
