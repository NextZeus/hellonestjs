import { Controller, Get, Req, HttpCode, Header, Redirect, Query, Param, Post, Body, Put, Delete, UseFilters } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntitiesDto } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ForbiddenException } from 'src/common/exceptions/forbidden.excption';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private catService: CatsService) { }

    @Post()
    @UseFilters(HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
        // return this.catService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Get(':id')
    // findOne(@Param() params): string {
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id}`;
    }


    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
