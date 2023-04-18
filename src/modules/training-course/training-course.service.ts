import { Injectable } from '@nestjs/common';
import { TrainingCourse } from './training-course.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';
import { ProfileService } from '../profile/profile.service';
import { TrainingCourseModel } from '@whitebeardeveloper/training-logic/logic/types/training-course.types';

@Injectable()
export class TrainingCourseService {
  constructor(
    @InjectModel(TrainingCourse)
    private trainingCourseRepository: typeof TrainingCourse,
    private profileService: ProfileService,
  ) {}

  async createTrainingCourse(
    dto: CreateTrainingCourseDto,
    userId: number,
  ): Promise<TrainingCourseModel> {
    const profileId = await this.profileService.getProfileIdByUserId(userId);
    const trainingCourseDtb = await this.trainingCourseRepository.create({
      ...dto,
      authorId: profileId,
    });
    trainingCourseDtb.setDataValue('control', { isEditable: true });
    return trainingCourseDtb;
  }

  async getAllTrainingCourses(): Promise<TrainingCourse[]> {
    const trainings = await this.trainingCourseRepository.findAll();
    return trainings;
  }

  async getTrainingCourseById(
    id: number,
    userId?: number,
  ): Promise<TrainingCourse> {
    const profileId = userId
      ? await this.profileService.getProfileIdByUserId(userId)
      : null;
    const training = await this.trainingCourseRepository.findOne({
      where: { id },
    });
    if (profileId && profileId === training.dataValues.authorId) {
      training.setDataValue('control', { isEditable: true });
    }
    return training;
  }
}
