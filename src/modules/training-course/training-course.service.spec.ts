import { Test, TestingModule } from '@nestjs/testing';
import { TrainingCourseService } from './training-course.service';

describe('TrainingCourseService', () => {
  let service: TrainingCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingCourseService],
    }).compile();

    service = module.get<TrainingCourseService>(TrainingCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
