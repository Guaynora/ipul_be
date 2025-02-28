import { CommandHandler } from '@nestjs/cqrs';
import { LoginUserCommand } from './login-user.command';
import { AuthService } from '../../../infrastructure/services';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler {
  constructor(private readonly authService: AuthService) {}

  async execute(command: LoginUserCommand) {
    return this.authService.login(command.loginUserDto);
  }
}
