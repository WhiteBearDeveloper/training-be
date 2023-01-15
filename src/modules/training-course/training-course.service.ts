import { Injectable } from '@nestjs/common';
import { TrainingCourse } from './training-course.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class TrainingCourseService {
  constructor(
    @InjectModel(TrainingCourse)
    private trainingCourseRepository: typeof TrainingCourse,
    private profileService: ProfileService,
  ) {}

  async createTrainingCourse(dto: CreateTrainingCourseDto, userId: number) {
    const profileId = await this.profileService.getProfileIdByUserId(userId);
    const trainingCourse = await this.trainingCourseRepository.create({
      ...dto,
      profileId,
    });
    return trainingCourse;
  }
}
