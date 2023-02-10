import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  SexEnum,
  ProfileProps,
} from '@whitebeardeveloper/training-logic/logic/types/profile.types';
import { WithUserId } from 'src/types/common';

export class CreateProfileDto implements Partial<ProfileProps>, WithUserId {
  @ApiProperty({ example: 'Олег', description: 'Имя пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly firstName?: string;

  @ApiProperty({ example: 'Романцев', description: 'Фамилия пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly lastName?: string;

  @ApiProperty({ example: 'Иванович', description: 'Отчество пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly middleName?: string;

  @ApiProperty({ example: '04.01.1954', description: 'Дата рождения' })
  @IsDateString()
  @IsOptional()
  readonly birthDate?: string;

  @ApiProperty({ example: '1', description: 'Пол. 1 - мужской, 2 - женский' })
  @IsNumber({})
  @IsOptional()
  readonly sex?: SexEnum;

  @ApiProperty({ example: '1', description: 'Id пользователя-прототипа' })
  @IsNumber()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  readonly userId: number;
}
