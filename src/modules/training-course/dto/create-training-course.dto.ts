import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTrainingCourseDto {
  @ApiProperty({
    example: 'Тренировка бицепса',
    description: 'Название тренировки',
  })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}

export class GetTrainingCourseDto {
  @ApiProperty({
    example: '7',
    description: 'Id тренировочного курса',
  })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  readonly id?: number;
}
