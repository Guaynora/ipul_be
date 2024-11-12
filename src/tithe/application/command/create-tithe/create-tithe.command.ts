import { Tithe } from '../../../domain';

export class CreateTitheCommand {
  constructor(public readonly tithe: Tithe) {}
}
