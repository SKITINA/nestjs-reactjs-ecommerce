import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/shared/decorators/public.decorator';
import { CreateUserDto } from './dto/CreateUserDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Get('/email/:email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }
}
