import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './entity/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
    imports: [TypeOrmModule.forFeature([ PokemonEntity ])],
    providers: [PokemonService],
    controllers: [PokemonController],
})
export class PokemonModule {}
