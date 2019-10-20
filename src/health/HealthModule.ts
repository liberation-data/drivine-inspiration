import { Module } from '@nestjs/common';
import { HealthController } from './HealthController';
import { HealthRepository } from './HealthRepository';

@Module({
    imports: [],
    providers: [HealthRepository],
    controllers: [HealthController],
    exports: []
})
export class HealthModule {}
