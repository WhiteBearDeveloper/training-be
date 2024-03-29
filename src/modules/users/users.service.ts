import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProfileService } from '../profile/profile.service';
import { CommonUserDto } from './dto/common-user.dto';
// import { RolesService } from 'src/roles/roles.service';
// import { AddRoleDto } from './dto/add-role.dto';
import { User } from './users.model';
import { UserModel } from './users.types';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private profileService: ProfileService, // private roleService: RolesService,
  ) {}

  async createUser(dto: CommonUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const profile = await this.profileService.createProfile({
      userId: user.id,
    });
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    return user;
  }

  // async getAllUsers() {
  //   const users = await this.userRepository.findAll({
  //     attributes: { exclude: ['password'] },
  //   });
  //   return users;
  // }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    if (!user) {
      throw new HttpException(
        'Нет пользователя с таким email',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  //   async addRole(dto: AddRoleDto) {
  //     const user = await this.userRepository.findByPk(dto.userId);
  //     const role = await this.roleService.getRoleByValue(dto.value);

  //     if (user && role) {
  //       await user.$add('role', role.id);
  //       return dto;
  //     }
  //     throw new HttpException(
  //       'Пользователь или роль не найдены',
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
}
