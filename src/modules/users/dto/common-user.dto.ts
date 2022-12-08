import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CommonUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Почтовый адрес' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: '123456', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, {
    message: 'Пароль должен быть не короче 4-х и не длиннее 16 символов',
  })
  readonly password: string;
}
