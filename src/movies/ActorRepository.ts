import { Injectable } from '@nestjs/common';
import {
    CypherStatement,
    InjectCypher,
    InjectPersistenceManager,
    PersistenceManager,
    QuerySpecification
} from '@liberation-data/drivine';

@Injectable()
export class ActorRepository {

    @InjectPersistenceManager() readonly persistenceManager: PersistenceManager;

    constructor(@InjectPersistenceManager() persistenceManager: PersistenceManager,
                @InjectCypher(__dirname, 'moviesForActor-NEO4J') readonly moviesForActor: CypherStatement) {
        this.persistenceManager = persistenceManager;
    }

    async findByName(name: string): Promise<any> {
        const spec = new QuerySpecification().withStatement(this.moviesForActor).bind([name]);
        return this.persistenceManager.maybeGetOne(spec);
    }

}
