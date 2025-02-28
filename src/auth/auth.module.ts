import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthController } from './api/rest/auth.controller';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CreateUserHandler, LoginUserHandler } from './application/command';

@Module({
  controllers: [AuthController],
  providers: [CreateUserHandler, LoginUserHandler],
  imports: [CqrsModule, InfrastructureModule],
})
export class AuthModule {}
