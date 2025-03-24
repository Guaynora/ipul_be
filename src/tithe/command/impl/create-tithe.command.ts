import { CreateTitheInput } from '../../dto';

export class CreateTitheCommand {
  constructor(public readonly tithe: CreateTitheInput) {}
}
