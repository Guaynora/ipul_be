import { UnauthorizedException } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserCommand } from '../impl';

@CommandHandler(LoginUserCommand)
export class LoginUserHandler {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}

  async execute(command: LoginUserCommand) {
    try {
      const { password, email } = command.loginUserDto;

      const user = await this.userRepository.findOne({
        where: { email },
        select: { email: true, password: true, id: true },
      });

      if (!user) {
        throw new UnauthorizedException('Credentials are not valid (email)');
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Credentials are not valid (password)');
      }

      return {
        ...user,
        token: this.authService.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      this.authService.handleDbErros(error);
    }
  }
}
