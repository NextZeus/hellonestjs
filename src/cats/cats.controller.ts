import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(
        private readonly catService: CatsService
    ){}

    @Post()
    async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catService.createCat(createCatDto);
    }

    @Get()
    async getAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }
}
