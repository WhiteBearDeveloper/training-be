import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.model';
import { ProfileInterface } from './profile.types';
import { ProfileModel } from '@whitebeardeveloper/training-logic/dist/profile/types';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async createProfile(dto: CreateProfileDto): Promise<ProfileInterface> {
    const user = await this.profileRepository.create(dto);
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    return user;
  }

  async getProfileById(userId: number): Promise<ProfileModel> {
    const profile: ProfileInterface = await this.profileRepository.findOne({
      where: { userId },
      include: { all: true },
      attributes: { exclude: ['userId'] },
    });
    return profile;
  }

  async getProfileIdByUserId(userId: number): Promise<number> {
    const profile: ProfileInterface = await this.profileRepository.findOne({
      where: { userId },
      attributes: { include: ['id'] },
    });
    return profile.id;
  }
}
