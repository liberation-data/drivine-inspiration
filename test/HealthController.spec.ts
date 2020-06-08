import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { AppModule } from '@/AppModule';
import { configureApp } from '@/main';

describe('HealthController (e2e)', () => {

    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await configureApp(app);
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    describe('GET /health/check', () => {
        it('should return 200 OK with text body "OK" ', async done => {
            const result = await request(app.getHttpServer())
                .get('/health/check')
                .expect(HttpStatus.OK);

            expect(result.text).toEqual('OK');

            done();
        });
    });

    describe('GET /health/status', () => {
        it('should return 200 OK with text body {"database": "OK"}', async done => {
            const result = await request(app.getHttpServer())
                .get('/health/status')
                .expect(HttpStatus.OK);

            expect(result.body.vertices).toBeGreaterThan(1);

            done();
        });
    });
});
