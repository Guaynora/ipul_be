import { Module } from '@nestjs/common';
import { TithesService } from './tithes.service';
import { TithesResolver } from './tithes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tithe } from './entities/tithe.entity';

@Module({
  providers: [TithesResolver, TithesService],
  imports: [
    TypeOrmModule.forFeature([Tithe])
  ]
})
export class TithesModule { }
