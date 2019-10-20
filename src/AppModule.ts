import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { HealthModule } from './health/HealthModule';
import { TrafficModule } from './traffic/TrafficModule';
import { DrivineModule, DrivineModuleOptions } from '@liberation-data/drivine/DrivineModule';
import { ConnectionProviderRegistry } from '@liberation-data/drivine/connection/ConnectionProviderRegistry';
import {TransactionContextMiddleware} from "@liberation-data/drivine/transaction/TransactionContextMIddleware";

@Module({
    imports: [
        DrivineModule.withOptions(<DrivineModuleOptions>{
            connectionProviders: [ConnectionProviderRegistry.buildOrResolveFromEnv()]
        }),
        HealthModule,
        TrafficModule
    ],
    controllers: [],
    providers: []
})
export class AppModule implements NestModule {

    public configure(consumer: MiddlewareConsumer): any {
        consumer.apply(TransactionContextMiddleware).forRoutes('**/**');
    }


}
