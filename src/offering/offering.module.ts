import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommitteeModule } from '../committee/Committee.module';
import {
  CreateOfferingHandler,
  UpdateOfferingHandler,
} from './command/handler';
import { Offering } from './entities';
import { OfferingResolver } from './offering.resolver';
import { OfferingService } from './offering.service';
import {
  GetOfferingQueryHandler,
  GetOfferingsQueryHandler,
} from './queries/handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Offering]), CommitteeModule],
  providers: [
    OfferingResolver,
    OfferingService,
    CreateOfferingHandler,
    UpdateOfferingHandler,
    GetOfferingQueryHandler,
    GetOfferingsQueryHandler,
  ],
})
export class OfferingModule {}
