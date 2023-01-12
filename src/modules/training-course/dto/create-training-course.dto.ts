import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTrainingCourseDto {
  @ApiProperty({
    example: 'Тренировка бицепса',
    description: 'Название тренировки',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({ example: '1', description: 'Id автора создателя курса' })
  @IsNumber()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  readonly profileId: number;
}
