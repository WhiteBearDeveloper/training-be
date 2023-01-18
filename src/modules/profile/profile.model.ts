// import { ApiProperty } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ProfileInterface } from './profile.types';
import { SexEnum } from '@whitebeardeveloper/training-logic/dist/common/types';

@Table({ tableName: 'profile' })
export class Profile extends Model<Profile, ProfileInterface> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Олег', description: 'Имя пользователя' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @ApiProperty({ example: 'Романцев', description: 'Фамилия пользователя' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @ApiProperty({ example: 'Иванович', description: 'Отчество пользователя' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  middleName: string;

  @ApiProperty({ example: '04.01.1954', description: 'Дата рождения' })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthDate: string;

  @ApiProperty({ example: '1', description: 'Пол. 1 - мужской, 2 - женский' })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  sex: SexEnum;

  @ApiProperty({
    example: '1',
    description: 'Id пользователя-прототипа',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
