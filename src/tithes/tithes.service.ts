import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTitheInput, UpdateTitheInput } from './dto/inputs';
import { Tithe } from './entities/tithe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TithesService {

  constructor(
    @InjectRepository(Tithe)
    private readonly tithesRepository: Repository<Tithe>
  ) { }

  async create(createTitheInput: CreateTitheInput): Promise<Tithe> {
    const newTithe = this.tithesRepository.create(createTitheInput)
    return await this.tithesRepository.save(newTithe)
  }

  async findAll(): Promise<Tithe[]> {
    return this.tithesRepository.find();
  }

  async findOne(id: string): Promise<Tithe> {
    const tithe = await this.tithesRepository.findOneBy({ id })
    if (!tithe) throw new NotFoundException(`Tithe with id: ${id} not found`)
    return tithe
  }

  async update(id: string, updateTitheInput: UpdateTitheInput): Promise<Tithe> {
    const tithe = await this.tithesRepository.preload(updateTitheInput);
    if (tithe) throw new NotFoundException(`Tithe with id: ${id} not found`)
    return this.tithesRepository.save(tithe);
  }

  remove(id: number) {
    return `This action removes a #${id} tithe`;
  }
}
