import { Module } from '@nestjs/common';
import { TitheResolver } from './api/graphql';
import { TitheService } from './application/services';

@Module({
  providers: [TitheResolver, TitheService],
})
export class TitheModule {}
