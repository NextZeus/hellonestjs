import { Controller, Post, Get, Delete, Body, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        console.log(createUserDto);

        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}