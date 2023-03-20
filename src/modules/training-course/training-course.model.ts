import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { TrainingCourseModel } from '@whitebeardeveloper/training-logic/logic/types/training-course.types';

@Table({ tableName: 'training-courses' })
export class TrainingCourse extends Model<
  TrainingCourse,
  Omit<TrainingCourseModel, 'control'>
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Тренировка бицепса', description: 'Название курса' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'Id автора создателя курса',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  authorId: number;
}
