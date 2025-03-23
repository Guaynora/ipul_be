import { CreateCommitteeInput } from '../../dto';

export class CreateCommitteeCommand {
  constructor(public readonly committee: CreateCommitteeInput) {}
}
