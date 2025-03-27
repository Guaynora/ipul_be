import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offering } from './entities';

@Injectable()
export class OfferingService {
  private readonly logger = new Logger(OfferingService.name);

  constructor(
    @InjectRepository(Offering)
    private readonly offeringRepository: Repository<Offering>,
  ) {}

  async remove(id: string) {
    return `This action removes a #${id} tithe`;
  }

  handleDBException(error: any) {
    if (error.code === '23505') {
      throw new InternalServerErrorException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('Unespected error');
  }
}
