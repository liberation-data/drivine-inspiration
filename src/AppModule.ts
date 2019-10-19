import { Module } from "@nestjs/common";
import { HealthModule } from "./health/HealthModule";
import { TrafficModule } from "./traffic/TrafficModule";
import {
  DrivineModule,
  DrivineModuleOptions
} from "@liberation-data/drivine/DrivineModule";
import { ConnectionProviderRegistry } from "@liberation-data/drivine/connection/ConnectionProviderRegistry";

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
export class AppModule {}
