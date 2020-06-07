import { Module } from '@nestjs/common';
import { ActorRepository } from '@/movies/ActorRepository';
import { ActorController } from '@/movies/ActorController';

@Module({
    imports: [],
    providers: [ActorRepository],
    controllers: [ActorController],
    exports: []
})
export class MovieModule {}
