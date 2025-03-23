import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommitteeInput, UpdateCommitteeInput } from './dto';
import { Committee } from './entities';

@Injectable()
export class CommitteeService {
  constructor(
    @InjectRepository(Committee)
    private readonly committeeRepository: Repository<Committee>,
  ) {}

  async create(createCommitteeInput: CreateCommitteeInput): Promise<Committee> {
    console.log('create committee =>', createCommitteeInput);
    return await this.committeeRepository.save(createCommitteeInput);
  }

  async findAll(): Promise<Committee[]> {
    const committees = await this.committeeRepository.find();
    console.log('committees =>', committees);
    return committees;
  }

  async findOne(id: string): Promise<Committee> {
    return this.committeeRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCommitteeInput: UpdateCommitteeInput) {
    return `This action updates a #${id} committee`;
  }

  async remove(id: string) {
    return `This action removes a #${id} committee`;
  }
}
