import { UpdateOfferingInput } from '../../dto';

export class UpdateOfferingCommand {
  constructor(
    public readonly id: string,
    public readonly offering: UpdateOfferingInput,
  ) {}
}
