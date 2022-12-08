import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { Roles } from 'src/auth/roles-auth.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';
// import { ValidationPipe } from 'src/pipes/validation.pipe';
// import { AddRoleDto } from './dto/add-role.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

// @ApiTags('Пользователи')
// @Controller('users')
// export class UsersController {
//   constructor(private userService: UsersService) {}

//   @ApiOperation({ summary: 'Создание пользователя' })
//   @ApiResponse({ status: 200, type: User })
//   //   @UsePipes(ValidationPipe)
//   @Post()
//   create(@Body() userDto: CreateUserDto) {
//     return this.userService.createUser(userDto);
//   }

//   @ApiOperation({ summary: 'Получение списка всех пользователей' })
//   @ApiResponse({ status: 200, type: [User] })
//   //   @Roles('ADMIN')
//   @UseGuards(JwtAuthGuard)
//   //   @UseGuards(RolesGuard)
//   @Get()
//   getAll() {
//     return this.userService.getAllUsers();
//   }

//   @ApiOperation({ summary: 'Выдача роли' })
//   @ApiResponse({ status: 200 })
//   @Roles('ADMIN')
// @UseGuards(JwtAuthGuard)
//   @UseGuards(RolesGuard)
//   @Post('/role')
//   addRole(@Body() dto: AddRoleDto) {
//     return this.userService.addRole(dto);
//   }
// }
