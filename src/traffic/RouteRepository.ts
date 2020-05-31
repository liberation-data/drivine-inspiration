import { Injectable } from '@nestjs/common';
import { Route } from './Route';
import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { Transactional } from '@liberation-data/drivine/transaction/Transactional';
import { QuerySpecification } from '@liberation-data/drivine/query/QuerySpecification';
import { Cursor } from '@liberation-data/drivine/cursor/Cursor';
import { CursorSpecification } from '@liberation-data/drivine/cursor/CursorSpecification';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';
import { CypherStatement } from '@liberation-data/drivine/query/Statement';

@Injectable()
export class RouteRepository {
    constructor(
        @InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
        @InjectCypher('./routesBetween') readonly routesBetween: CypherStatement
    ) {
    }

    @Transactional()
    async findFastestBetween(start: string, destination: string): Promise<Route> {
        return this.persistenceManager.getOne(
            new QuerySpecification<Route>()
                .withStatement(this.routesBetween)
                .bind([start, destination])
                .limit(1)
                .transform(Route)
        );
    }

    @Transactional()
    async findRoutesBetween(start: string, destination: string): Promise<Route[]> {
        return this.persistenceManager.query(
            new QuerySpecification<Route>()
                .withStatement(this.routesBetween)
                .bind([start, destination])
                .transform(Route)
        );
    }

    @Transactional()
    async asyncRoutesBetween(start: string, destination: string): Promise<Cursor<Route>> {
        return this.persistenceManager.openCursor(
            new CursorSpecification<Route>()
                .withStatement(this.routesBetween)
                .bind([start, destination])
                .batchSize(5)
                .transform(Route)
        );
    }
}
