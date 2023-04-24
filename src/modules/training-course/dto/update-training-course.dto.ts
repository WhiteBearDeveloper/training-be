import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { WithId } from '@whitebeardeveloper/training-logic/logic/types/common.types';

export class UpdateTrainingCourseDto implements WithId {
  @ApiProperty({
    example: '5',
    description: 'Id тренировки',
  })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly id: number;

  @ApiProperty({
    example: 'Тренировка бицепса',
    description: 'Название тренировки',
  })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;
}
