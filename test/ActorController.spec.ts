import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { AppModule } from '@/AppModule';
import { configureApp } from '@/main';

describe('ActorController (e2e)', () => {

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

    describe('GET /actors/:name/movies', () => {
        it('should list the movies for the given actor', async () => {

            const result = await request(app.getHttpServer())
                .get('/actors/Tom%20Hanks/movies')
                .expect(HttpStatus.OK);

            console.log(JSON.stringify(result.body))

        });
    });

});
