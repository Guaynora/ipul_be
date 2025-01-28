import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tithe } from 'src/tithe/domain';
import { Repository } from 'typeorm';
import { CreateTitheInput, UpdateTitheInput } from '../dto';

@Injectable()
export class TitheService {
  private readonly logger = new Logger(TitheService.name);

  constructor(
    @InjectRepository(Tithe)
    private readonly titheRepository: Repository<Tithe>,
  ) {}

  async create(createTitheInput: CreateTitheInput): Promise<Tithe> {
    try {
      const tithe = this.titheRepository.create(createTitheInput);
      return await this.titheRepository.save(tithe);
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async findAll(): Promise<Tithe[]> {
    try {
      return await this.titheRepository.find();
    } catch (error) {
      this.handleDBException(error);
    }
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

  private handleDBException(error: any) {
    if (error.code === '23505') {
      throw new InternalServerErrorException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unespected error');
  }
}
