import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfferingInput, UpdateOfferingInput } from './dto';
import { Offering } from './entities';

@Injectable()
export class OfferingService {
  private readonly logger = new Logger(OfferingService.name);

  constructor(
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async create(createOfferingInput: CreateOfferingInput): Promise<Offering> {
    try {
      const tithe = this.offeringRepository.create(createOfferingInput);
      return await this.offeringRepository.save(tithe);
    } catch (error) {
      this.handleDBException(error);
    }
  }

  // TODO: pagination
  async findAll(): Promise<Offering[]> {
    try {
      return await this.offeringRepository.find();
    } catch (error) {
      this.handleDBException(error);
    }
  }

  async findOne(id: string): Promise<Offering> {
    const tithe = await this.offeringRepository.findOneBy({ id });
    if (!tithe) {
      throw new NotFoundException(`Offering with id ${id} not found`);
    }
    return tithe;
  }

  async update(id: string, updateOfferingInput: UpdateOfferingInput) {
    const tithe = await this.offeringRepository.preload({
      id,
      ...updateOfferingInput,
    });
    if (!tithe) {
      throw new NotFoundException(`Offering with id ${id} not found`);
    }
    try {
      return await this.offeringRepository.save(tithe);
    } catch (error) {
      this.handleDBException(error);
    }
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
