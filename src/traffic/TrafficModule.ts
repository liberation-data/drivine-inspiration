import { Module } from '@nestjs/common';
import { RouteRepository } from './RouteRepository';
import { RouteController } from '@/traffic/RouteController';
import { UrbaniteRepository } from '@/traffic/UrbaniteRepository';

@Module({
    imports: [],
    providers: [RouteRepository, UrbaniteRepository],
    controllers: [RouteController],
    exports: []
})
export class TrafficModule {}
