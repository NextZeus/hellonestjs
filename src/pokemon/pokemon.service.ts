import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonEntity } from './entity/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
    constructor(
        @InjectRepository(PokemonEntity) private readonly pokemonRepo: Repository<PokemonEntity>
    ){}

    findAll(): Promise<PokemonEntity[]> {
        return this.pokemonRepo.find();
    }
}
