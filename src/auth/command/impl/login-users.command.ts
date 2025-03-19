import { LoginUserDto } from 'src/auth/dto';

export class LoginUserCommand {
  constructor(public readonly loginUserDto: LoginUserDto) {}
}
