import { UpdateCommitteeInput } from '../../dto';

export class UpdateCommitteeCommand {
  constructor(
    public readonly id: string,
    public readonly committee: UpdateCommitteeInput,
  ) {}
}
