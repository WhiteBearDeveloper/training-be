import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrainingCourseDto {
  @ApiProperty({
    example: 'Тренировка бицепса',
    description: 'Название тренировки',
  })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
