import { Module, forwardRef } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from './profile.model';
import { TrainingCourseModule } from '../training-course/training-course.module';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [ProfileService],
  imports: [
    SequelizeModule.forFeature([Profile]),
    forwardRef(() => TrainingCourseModule),
  ],
})
export class ProfileModule {}
