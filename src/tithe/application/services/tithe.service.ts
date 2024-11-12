import { Injectable } from '@nestjs/common';
import { CreateTitheInput, UpdateTitheInput } from '../dto';

@Injectable()
export class TitheService {
  create(createTitheInput: CreateTitheInput) {
    return 'This action adds a new tithe';
  }

  findAll() {
    return [];
  }

  findOne(id: string) {
    return `This action returns a #${id} tithe`;
  }

  update(id: string, updateTitheInput: UpdateTitheInput) {
    return `This action updates a #${id} tithe`;
  }

  remove(id: string) {
    return `This action removes a #${id} tithe`;
  }
}
