import { Controller, Get } from '@nestjs/common';
import { PokemonEntity } from './entity/pokemon.entity';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(
        private readonly pokemonService: PokemonService
    ){}
    @Get()
    async getAll(): Promise<PokemonEntity[]>{
        return this.pokemonService.findAll();
    }
}
