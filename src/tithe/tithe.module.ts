import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitheResolver } from './api/graphql';
import { CreateTitheHandler, UpdateTitheHandler } from './application/command';
import {
  GetTitheQueryHandler,
  GetTithesQueryHandler,
} from './application/queries';
import { TitheService } from './application/services';
import { Tithe } from './domain';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Tithe])],
  providers: [
    TitheResolver,
    TitheService,
    CreateTitheHandler,
    UpdateTitheHandler,
    GetTitheQueryHandler,
    GetTithesQueryHandler,
  ],
})
export class TitheModule {}
