import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUSerDto: CreateUserDto) {
    this.usersService.create(createUSerDto);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      // returns the result without the password property
      return result;
    }
    return null;
  }

  async login(readUserDto: CreateUserDto) {
    const foundUser = await this.usersService.findOne(readUserDto.email);
    if (!foundUser) {
      throw new NotFoundException(`email or password incorrect`);
    }
    if (foundUser.password !== readUserDto.password) {
      throw new NotFoundException(`email or password incorrect`);
    }
    const payload = {
      createdAt: new Date().toISOString(),
      sub: foundUser._id,
      role: '',
    };
    if (foundUser.email === 'sam@t.fr') {
      payload.role = 'admin';
    } else {
      payload.role = 'user';
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
