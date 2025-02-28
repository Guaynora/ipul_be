import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from './api/rest/auth.controller';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CreateUserHandler } from './application/command';

@Module({
  controllers: [AuthController],
  providers: [CreateUserHandler],
  imports: [CqrsModule, InfrastructureModule],
})
export class AuthModule {}
