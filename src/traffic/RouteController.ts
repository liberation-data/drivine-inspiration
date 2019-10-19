import {Controller, Get, Param} from "@nestjs/common";
import {RouteRepository} from "@/traffic/RouteRepository";
import {Route} from "@/traffic/Route";

export interface RecommendedRouteDto {
    start: string;
    destination: string;
    via: string[];
    travelTime: number;
}

@Controller('/routes')
export class RouteController {

    public constructor(public readonly routeRepository: RouteRepository) {

    }

    @Get('/between/:start/:dest')
    public async routeBetween(@Param('start') start: string,
                              @Param('dest') dest: string): Promise<RecommendedRouteDto[]> {

        const routes = await this.routeRepository.findRoutesBetween(start, dest);
        return routes.map((it: Route): RecommendedRouteDto => (
            {
                start: it.start,
                destination: it.destination,
                via: it.intermediateMetros(),
                travelTime: it.travelTime
            }
        ));
    }

}