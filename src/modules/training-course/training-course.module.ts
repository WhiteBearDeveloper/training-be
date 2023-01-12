import { Module } from '@nestjs/common';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourseController } from './training-course.controller';

@Module({
  providers: [TrainingCourseService],
  controllers: [TrainingCourseController]
})
export class TrainingCourseModule {}
