import { UpdateTitheInput } from '../../dto';

export class UpdateTitheCommand {
  constructor(
    public readonly id: string,
    public readonly tithe: UpdateTitheInput,
  ) {}
}
