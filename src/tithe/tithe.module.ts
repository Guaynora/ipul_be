import { Module } from '@nestjs/common';
import { TitheResolver } from './api/graphql';
import { TitheService } from './application/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tithe } from './domain';
import { CqrsModule } from '@nestjs/cqrs';
import { GetTithesQueryHandler } from './application/queries/get-tithes/get-tithes.handler';
import { CreateTitheHandler } from './application/command/create-tithe/create-tithe.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Tithe])],
  providers: [
    TitheResolver,
    TitheService,
    CreateTitheHandler,
    GetTithesQueryHandler,
  ],
})
export class TitheModule {}
