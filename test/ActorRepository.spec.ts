import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/AppModule';
import { RunWithDrivine } from '@liberation-data/drivine/utils/TestUtils';import { ActorRepository } from '@/movies/ActorRepository';


RunWithDrivine({rollback: true});
describe('ActorRepository', () => {

    let repo: ActorRepository;

    beforeAll(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
            providers: [ActorRepository],
            controllers: []
        }).compile();
        repo = app.get(ActorRepository);
    });

    it('should list the movies for a given actor', async () => {
        const results = await repo.findByName('Tom Hanks')
        console.log(JSON.stringify(results));
    });

    it('should list the co-actors for a given actor', async () => {
        const results = await repo.listCoActors('Meg Ryan')
        console.log(JSON.stringify(results));
    });

});
