import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourse } from './training-course.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';
import { UserIdExtraction } from 'src/decorators/extraction.decorator';
import { IsPublic } from 'src/services/auth/decorators';

@ApiTags('Тренировочный курс')
@Controller('training-courses')
export class TrainingCourseController {
  constructor(private trainingCourseService: TrainingCourseService) {}

  @ApiOperation({ summary: 'Создание тренировочного курса' })
  @ApiResponse({ status: 200, type: TrainingCourse })
  @UsePipes(ValidationPipe)
  @Post()
  create(
    @UserIdExtraction() userId: number,
    @Body() trainingCourseDto: CreateTrainingCourseDto,
  ) {
    return this.trainingCourseService.createTrainingCourse(
      trainingCourseDto,
      userId,
    );
  }

  @ApiOperation({ summary: 'Получение списка всех тренировочных курсов' })
  @ApiResponse({ status: 200, type: [TrainingCourse] })
  @UsePipes(ValidationPipe)
  @Get()
  @IsPublic()
  getAll() {
    return this.trainingCourseService.getAllTrainingCourses();
  }
}
