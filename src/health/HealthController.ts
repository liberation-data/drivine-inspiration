import { Controller, Get } from '@nestjs/common';
import { HealthRepository } from './HealthRepository';

interface StatusReport {
    vertices: number;
}

@Controller('health')
export class HealthController {
    constructor(readonly healthRepo: HealthRepository) {}

    @Get('check')
    check(): string {
        return 'OK';
    }

    @Get('status')
    async status(): Promise<StatusReport> {
        const result = await this.healthRepo.countAllVertices();
        return <StatusReport>{ vertices: result };
    }
}
