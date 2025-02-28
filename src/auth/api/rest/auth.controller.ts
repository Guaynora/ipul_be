import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../application/command';
import { CreateUserDto, LoginUserDto } from '../../application/dto';
import { LoginUserCommand } from 'src/auth/application/command/login/login-user.command';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(createUserDto));
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.commandBus.execute(new LoginUserCommand(loginUserDto));
  }
}
