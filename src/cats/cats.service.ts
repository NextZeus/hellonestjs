import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CatsService {
    constructor(private readonly configService: ConfigService) { }
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        console.log('redisPrefix: ', this.configService.RedisPrefix)
        return this.cats;
    }
}
