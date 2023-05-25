import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrainingCourseService } from './training-course.service';
import { TrainingCourse } from './training-course.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateTrainingCourseDto } from './dto/create-training-course.dto';
import { UpdateTrainingCourseDto } from './dto/update-training-course.dto';
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
  getCourses() {
    return this.trainingCourseService.getAllTrainingCourses();
  }

  @ApiOperation({ summary: 'Получение тренировочного курса' })
  @ApiResponse({ status: 200, type: [TrainingCourse] })
  @UsePipes(ValidationPipe)
  @Get('/:id')
  @IsPublic()
  getCourseById(@UserIdExtraction() userId: number, @Param('id') id: number) {
    return this.trainingCourseService.getTrainingCourseById(Number(id), userId);
  }

  @ApiOperation({ summary: 'Обновление тренировочного курса' })
  @ApiResponse({ status: 200, type: [TrainingCourse] })
  @UsePipes(ValidationPipe)
  @Put('/:id')
  updateTrainingCourse(
    @UserIdExtraction() userId: number,
    @Body() trainingCourseDto: UpdateTrainingCourseDto,
  ) {
    return this.trainingCourseService.updateTrainingCourse(
      trainingCourseDto,
      userId,
    );
  }

  @ApiOperation({ summary: 'Удаление тренировочного курса' })
  @ApiResponse({ status: 200, type: [TrainingCourse] })
  @UsePipes(ValidationPipe)
  @Delete('/:id')
  deleteTrainingCourse(@Param('id') id: number) {
    return this.trainingCourseService.deleteTrainingCourse(Number(id));
  }
}
