import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { HealthModule } from './health/HealthModule';
import { TrafficModule } from './traffic/TrafficModule';
import { DrivineModule, DrivineModuleOptions } from '@liberation-data/drivine/DrivineModule';
import {TransactionContextMiddleware} from "@liberation-data/drivine/transaction/TransactionContextMIddleware";
import { DatabaseRegistry } from '@liberation-data/drivine/connection/DatabaseRegistry';

@Module({
    imports: [
        DrivineModule.withOptions(<DrivineModuleOptions>{
            connectionProviders: [DatabaseRegistry.buildOrResolveFromEnv()]
        }),
        HealthModule,
        TrafficModule
    ],
    controllers: [],
    providers: []
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(TransactionContextMiddleware).forRoutes('**/**');
    }

}
