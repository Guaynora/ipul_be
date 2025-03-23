import { CommandHandler } from '@nestjs/cqrs';
import { UpdateCommitteeCommand } from '../impl';
import { CommitteeService } from '../../committee.service';

@CommandHandler(UpdateCommitteeCommand)
export class UpdateCommitteeHandler {
  constructor(private readonly committeService: CommitteeService) {}

  async execute(command: UpdateCommitteeCommand) {
    this.committeService.update(command.id, command.committee);
  }
}
