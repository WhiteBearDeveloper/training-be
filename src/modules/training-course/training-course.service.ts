import { Injectable } from '@nestjs/common';
import { TrainingCourse } from './training-course.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';

@Injectable()
export class TrainingCourseService {
  constructor(
    @InjectModel(TrainingCourse)
    private trainingCourseRepository: typeof TrainingCourse,
  ) {}

  async createTrainingCourse(dto: CreateTrainingCourseDto) {
    const trainingCourse = await this.trainingCourseRepository.create(dto);
    return trainingCourse;
  }
}
