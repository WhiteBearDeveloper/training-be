import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import {
  AuthModule,
  ProfileModule,
  UsersModule,
  TrainingCourseModule,
} from './modules/';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { Profile } from './modules/profile/profile.model';
import { User } from './modules/users/users.model';

@Module({
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Profile],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ProfileModule,
    TrainingCourseModule,
  ],
})
export class AppModule {}
