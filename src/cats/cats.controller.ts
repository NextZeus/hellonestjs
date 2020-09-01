import { Controller, Get, Req, HttpCode, Header, Redirect, Query, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { ListAllEntitiesDto } from './dto/list-all-entities.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    // @Get('ab*cd') route wildcards
    @HttpCode(200)
    // @Header('Cache-Control', 'none')
    // @Redirect('https://nestjs.com', 301)
    findAll1(@Query() query: ListAllEntitiesDto): string {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    async findAll2(@Req() request: Request): Promise<any[]> {
        return [];
    }

    // 
    findAll3(): Observable<any[]> {
        return of([]);
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            // 覆盖redirect的参数
            return { url: 'https://docs.nestjs.com/v5/', statusCode: 302 }
        }
    }

    @Get(':id')
    // findOne(@Param() params): string {
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id}`;
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return "This action adds a new cat";
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
