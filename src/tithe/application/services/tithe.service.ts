import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tithe } from 'src/tithe/domain';
import { Repository } from 'typeorm';
import { CreateTitheInput, UpdateTitheInput } from '../dto';

@Injectable()
export class TitheService {
  constructor(
    @InjectRepository(Tithe)
    private readonly titheRepository: Repository<Tithe>,
  ) {}

  async create(createTitheInput: CreateTitheInput): Promise<Tithe> {
    console.log('create tithe =>', createTitheInput);
    return await this.titheRepository.save(createTitheInput);
  }

  async findAll(): Promise<Tithe[]> {
    const tithes = await this.titheRepository.find();
    console.log('tithes =>', tithes);
    return tithes;
  }

  async findOne(id: string): Promise<Tithe> {
    return this.titheRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTitheInput: UpdateTitheInput) {
    return `This action updates a #${id} tithe`;
  }

  async remove(id: string) {
    return `This action removes a #${id} tithe`;
  }
}
