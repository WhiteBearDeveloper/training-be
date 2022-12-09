import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
// import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  // controllers: [UsersController],
  controllers: [],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => AuthModule),
    ProfileModule,
  ],
  exports: [UsersService, AuthModule],
})
export class UsersModule {}
