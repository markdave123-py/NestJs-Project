import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { updateUserParams, createUserParams } from '../core/utils/types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) { }

  create(createUserDto: CreateUserDto) {
    
    const newUser = this.userRepository.create({...createUserDto, createdAt: new Date()});
    return this.userRepository.save(newUser);

  }

  getUsers() {
    return this.userRepository.find();
  }

  findOne(id) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return  this.userRepository.update({id}, {...updateUserDto});
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
