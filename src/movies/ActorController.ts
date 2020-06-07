import { Controller, Get, Param } from '@nestjs/common';
import { ActorRepository } from '@/movies/ActorRepository';

export interface RecommendedRouteDto {
    start: string;
    destination: string;
    via: string[];
    travelTime: number;
}

@Controller('/actors')
export class ActorController {
    constructor(readonly actorRepository: ActorRepository) {
    }

    @Get(':name/movies')
    async routeBetween(@Param('name') name: string): Promise<any[]> {
        return this.actorRepository.findByName(name);
    }

}
