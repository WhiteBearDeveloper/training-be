import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';
import { ProfileCreationProps } from './profile.types';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async createProfile(dto: CreateProfileDto) {
    const user = await this.profileRepository.create(dto);
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    return user;
  }

  async getMyProfile(userId: number) {
    return await this.getProfileById(userId);
  }

  private async getProfileById(userId: number) {
    const profile: ProfileCreationProps = await this.profileRepository.findOne({
      where: { userId },
      include: { all: true },
      attributes: { exclude: ['userId'] },
    });
    return profile;
  }
}
