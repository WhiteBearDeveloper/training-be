import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourse } from './training-course.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';

@ApiTags('Тренировочный курс')
@Controller('training-course')
export class TrainingCourseController {
  constructor(private trainingCourseService: TrainingCourseService) {}

  @ApiOperation({ summary: 'Создание тренировочного курса' })
  @ApiResponse({ status: 200, type: TrainingCourse })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() trainingCourseDto: CreateTrainingCourseDto) {
    return this.trainingCourseService.createTrainingCourse(trainingCourseDto);
  }
}
