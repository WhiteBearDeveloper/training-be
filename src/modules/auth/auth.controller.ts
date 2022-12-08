import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from 'src/services/auth/decorators';
import { CommonUserDto } from '../users/dto/common-user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @IsPublic()
  login(@Body() userDto: CommonUserDto) {
    return this.authService.login(userDto);
  }

  @IsPublic()
  @Post('/registration')
  registration(@Body() userDto: CommonUserDto) {
    return this.authService.registration(userDto);
  }
}
