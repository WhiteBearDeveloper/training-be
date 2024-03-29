import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserModel } from './users.types';
// import { Role } from 'src/roles/roles.model';
// import { UserRoles } from 'src/user-roles/user-roles';
// import { UserRoles } from 'src/user-roles/user-roles';

@Table({ tableName: 'users' })
export class User extends Model<User, UserModel> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@email.com', description: 'Почтовый адрес' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '123456', description: 'Пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  // @BelongsToMany(() => Role, () => UserRoles)
  // roles: Role[];
}
