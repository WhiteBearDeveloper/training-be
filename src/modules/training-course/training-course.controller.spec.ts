import { Test, TestingModule } from '@nestjs/testing';
import { TrainingCourseController } from './training-course.controller';

describe('TrainingCourseController', () => {
  let controller: TrainingCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingCourseController],
    }).compile();

    controller = module.get<TrainingCourseController>(TrainingCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
