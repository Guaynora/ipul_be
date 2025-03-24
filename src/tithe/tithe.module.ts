import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTitheHandler, UpdateTitheHandler } from './command/handler';
import { Tithe } from './entities';
import { GetTitheQueryHandler, GetTithesQueryHandler } from './queries/handler';
import { TitheResolver } from './tithe.resolver';
import { TitheService } from './tithe.service';

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
