import { CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  async execute(command: CreateUserCommand) {
    try {
      const { password, ...userData } = command.user;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);

      delete user.password;

      return {
        ...user,
        token: this.authService.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      this.authService.handleDbErros(error);
    }
  }
}
