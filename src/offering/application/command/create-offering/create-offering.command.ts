import { CreateOfferingInput } from '../../dto';

export class CreateOfferingCommand {
  constructor(public readonly offering: CreateOfferingInput) {}
}
