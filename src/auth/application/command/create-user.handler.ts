import { CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { AuthService } from '../../infrastructure/services';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler {
  constructor(private readonly authService: AuthService) {}

  async execute(command: CreateUserCommand) {
    return this.authService.create(command.user);
  }
}
