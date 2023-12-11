import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Validator } from 'class-validator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {

    const user = this.usersService.findOne(createUserDto.email);
    if(user) {
      return "user already exists";
    }
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(+id)
  }
}
