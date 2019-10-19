import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { HttpStatus, INestApplication } from "@nestjs/common";
import { AppModule } from "@/AppModule";
import { configureApp } from "@/main";
import { inTestContext } from "@liberation-data/drivine/test/TestContext";

describe("RouteController (e2e)", () => {
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

  describe("GET /routes/between/Cavite Island/NYC", () => {
    it('should return 200 OK with text body "OK" ', async done => {
      return inTestContext().run(async () => {
        const result = await request(app.getHttpServer())
          .get("/routes/between/Pigalle/NYC")
          .expect(HttpStatus.OK);

        console.log(JSON.stringify(result.body));

        done();
      });
    });
  });
});
