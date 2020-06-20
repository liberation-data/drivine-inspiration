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

    constructor(@InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
                @InjectCypher(__dirname, 'moviesForActor') readonly moviesForActor: CypherStatement,
                @InjectCypher(__dirname, 'coActorsForActor') readonly coActorsForActor: CypherStatement) {
    }

    async findByName(name: string): Promise<any> {
        const spec = new QuerySpecification().withStatement(this.moviesForActor).bind({name: name});
        return this.persistenceManager.maybeGetOne(spec);
    }

    async listCoActors(name: string): Promise<any> {
        const spec = new QuerySpecification().withStatement(this.coActorsForActor).bind({name: name});
        return this.persistenceManager.maybeGetOne(spec);
    }

}
