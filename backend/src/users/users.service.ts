import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUserDto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDTO: CreateUserDto): Promise<CreateUserDto> {
    const user = this.repo.create(createUserDTO);
    const isTaken = await this.repo.findOne({ email: user.email });
    if (isTaken) {
      throw new HttpException(
        'this email was already taken',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.repo.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.repo.findOne({ email });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
