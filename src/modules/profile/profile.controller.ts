import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { UserIdExtraction } from '../../decorators/exctraction.decorator';

@ApiTags('Профиль')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: Profile })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() profileDto: CreateProfileDto) {
    return this.profileService.createProfile(profileDto);
  }

  @ApiOperation({ summary: 'Получение своего профиля' })
  @ApiResponse({ status: 200, type: Profile })
  @Get('/me')
  getMyProfile(@UserIdExtraction() id: number) {
    return this.profileService.getProfileById(id);
  }

  //   @ApiOperation({ summary: 'Получение списка всех пользователей' })
  //   @ApiResponse({ status: 200, type: [User] })
  //   //   @Roles('ADMIN')
  //   //   @UseGuards(RolesGuard)
  //   @Get()
  //   getAll() {
  //     return this.userService.getAllUsers();
  //   }

  //   @ApiOperation({ summary: 'Выдача роли' })
  //   @ApiResponse({ status: 200 })
  //   @Roles('ADMIN')
  //   @UseGuards(RolesGuard)
  //   @Post('/role')
  //   addRole(@Body() dto: AddRoleDto) {
  //     return this.userService.addRole(dto);
  //   }
}
