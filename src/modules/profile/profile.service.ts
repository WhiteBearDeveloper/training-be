import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async createProfile(dto: CreateProfileDto) {
    const user = await this.profileRepository.create(dto);
    console.log('user :>> ', user);
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    return user;
  }
}
