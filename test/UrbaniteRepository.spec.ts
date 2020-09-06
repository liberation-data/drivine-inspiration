import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@/AppModule';
import { RunWithDrivine } from '@liberation-data/drivine/utils/TestUtils';
import { UrbaniteRepository } from '@/traffic/UrbaniteRepository';
import { Urbanite } from '@/traffic/Urbanite';
import { Metro } from '@/traffic/Metro';

const uuid = require('uuid').v4;

RunWithDrivine({ rollback: false });
describe('UrbaniteRepository', () => {

    let repo: UrbaniteRepository;

    beforeAll(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
            providers: [UrbaniteRepository],
            controllers: []
        }).compile();
        repo = app.get(UrbaniteRepository);
    });

    it(`should save the urbanite and cascade save the urbanite's metros`, async () => {
        const metros = [new Metro('NYC'), new Metro('Cavite Island')];
        const mg = new Urbanite(uuid(),'Brutus', 'Paramdal', new Date('1984-06-22'), metros);
        await repo.save(mg);
    });


});
