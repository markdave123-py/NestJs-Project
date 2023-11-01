import { Module } from '@nestjs/common';
// import { ControllerController } from './users/controller/controller.controller';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './service/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [{
    provide: "USER_SERVICE",
    useClass: UsersService
  }]
})
export class UsersModule {}
