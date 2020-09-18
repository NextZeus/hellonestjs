import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    constructor() { }
    private readonly cats: Cat[] = [];

    create(cat: Cat): Cat {
        this.cats.push(cat);

        return cat
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): Cat {
        return this.cats.find((v) => v.id === id)
    }
}
