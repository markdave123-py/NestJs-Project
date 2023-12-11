import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { dbConfig } from './core/config/db.config';


@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UsersModule],
  controllers: [],
  providers: [],
})



export class AppModule {}
