import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferingResolver } from './api/graphql';
import {
  CreateOfferingHandler,
  UpdateOfferingHandler,
} from './application/command';
import {
  GetOfferingQueryHandler,
  GetOfferingsQueryHandler,
} from './application/queries';
import { OfferingService } from './application/services';
import { Offering } from './domain';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Offering])],
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
