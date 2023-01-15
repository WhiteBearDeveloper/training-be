import { Module, forwardRef } from '@nestjs/common';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourseController } from './training-course.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TrainingCourse } from './training-course.model';
import { Profile } from '../profile/profile.model';
import { ProfileModule } from '../profile/profile.module';

@Module({
  providers: [TrainingCourseService],
  controllers: [TrainingCourseController],
  imports: [
    SequelizeModule.forFeature([TrainingCourse, Profile]),
    forwardRef(() => ProfileModule),
  ],
})
export class TrainingCourseModule {}
