// import { ApiProperty } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Common, WithIntegerProfileId } from 'src/types/common';

interface TrainingCourseInterface extends WithIntegerProfileId, Common {}

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
    allowNull: true,
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
