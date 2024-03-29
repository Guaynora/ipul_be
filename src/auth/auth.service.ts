import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { LoginInput, SignupInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  private getJwtToken(userId: string) {
    return this.jwtService.sign({ id: userId })

  }

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.usersService.create(signupInput)

    const token = this.getJwtToken(user.id)
    return { token, user }
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;
    const user = await this.usersService.findOneByEmail(email)

    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException("Email / password do not match")
    }

    const token = this.getJwtToken(user.id)
    return {
      token,
      user
    }
  }

  async revalidateToken() {
    return
  }
}
