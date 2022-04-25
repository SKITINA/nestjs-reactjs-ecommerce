import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto/LoginUserDto';
import { UserDto } from 'src/users/dto/UserDto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDto> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(payload: LoginUserDto) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
