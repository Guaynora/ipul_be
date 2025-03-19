import { CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly authService: AuthService,
  ) {}

  async execute(command: CreateUserCommand) {
    try {
      const { ...userData } = command.user;

      const user = this.userRepository.create({
        id: undefined,
        fullName: userData.fullName,
        email: userData.email,
        password: bcrypt.hashSync(userData.password, 10),
      });

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
