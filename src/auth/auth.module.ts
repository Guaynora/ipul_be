import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserHandler, LoginUserHandler } from './command/handler';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [CreateUserHandler, LoginUserHandler, AuthService],
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '2h' },
        };
      },
    }),
  ],
})
export class AuthModule {}
