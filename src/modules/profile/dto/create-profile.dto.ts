import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { SexEnum } from '../profile.types';

export class CreateProfileDto {
  @ApiProperty({ example: 'Олег', description: 'Имя пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly firstName: string;

  @ApiProperty({ example: 'Романцев', description: 'Фамилия пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly lastName: string;

  @ApiProperty({ example: 'Иванович', description: 'Отчество пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly middleName: string;

  @ApiProperty({ example: '04.01.1954', description: 'Дата рождения' })
  @IsDateString()
  readonly birthDate: string;

  @ApiProperty({ example: '1', description: 'Пол. 1 - мужской, 2 - женский' })
  @IsNumber({})
  readonly sex: SexEnum;

  @ApiProperty({ example: '1', description: 'Id пользователя-прототипа' })
  @IsNumber()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  readonly userId: number;
}
