import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  WithProfileId,
  Common,
} from '@whitebeardeveloper/training-logic/src/common/types';

interface TrainingCourseInterface extends WithProfileId, Common {}

@Table({ tableName: 'training-courses' })
export class TrainingCourse extends Model<
  TrainingCourse,
  TrainingCourseInterface
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
  profileId: number;
}
