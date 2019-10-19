import { Module } from "@nestjs/common";
import { RouteRepository } from "./RouteRepository";
import { RouteController } from "@/traffic/RouteController";

@Module({
  imports: [],
  providers: [RouteRepository],
  controllers: [RouteController],
  exports: []
})
export class TrafficModule {}
