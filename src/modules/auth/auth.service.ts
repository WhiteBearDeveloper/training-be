import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as brcrypt from 'bcryptjs';
import { CommonUserDto } from '../users/dto/common-user.dto';
import { User } from '../users/users.model';
import { UsersService } from '../users/users.service';
import { UserInformation } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CommonUserDto): Promise<UserInformation> {
    const user = await this.validateUser(userDto);
    const tokenData = await this.generateToken(user);
    return { id: user.id, token: tokenData.token };
  }

  async registration(userDto: CommonUserDto): Promise<UserInformation> {
    const newUser = await this.userService.getUserByEmail(userDto.email);
    if (newUser) {
      throw new HttpException(
        'Пользователь с таким email уже существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    // if (!(userDto.sex in SexEnum)) {
    //   throw new HttpException(
    //     'Пол пользователя может быть только мужским или женским',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    const hashPassword = await brcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    const tokenData = await this.generateToken(user);
    return {
      id: user.id,
      token: tokenData.token,
    };
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CommonUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await brcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }
}
