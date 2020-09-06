import { Injectable, Logger } from '@nestjs/common';
import { InjectCypher, InjectPersistenceManager } from '@liberation-data/drivine/DrivineInjectionDecorators';
import { PersistenceManager } from '@liberation-data/drivine/manager/PersistenceManager';
import { Urbanite } from '@/traffic/Urbanite';
import { CypherStatement, DatabaseType, QuerySpecification, Transactional } from '@liberation-data/drivine';
import { ObjectUtils } from '@liberation-data/drivine/utils';

@Injectable()
export class UrbaniteRepository {

    private logger = new Logger(UrbaniteRepository.name);

    constructor(@InjectPersistenceManager() readonly persistenceManager: PersistenceManager,
                @InjectCypher(__dirname, 'save-urbanite') readonly saveUrbanite: CypherStatement) {
    }

    /**
     * Creates or updates the person. For the frequented haunts, if that Metro does not exist in the database, it
     * is created.
     * @param person
     */
    @Transactional()
    async save(person: Urbanite): Promise<void> {
        if (this.persistenceManager.type == DatabaseType.NEO4J) {
            await this.neo4jSave(person);
        } else if (this.persistenceManager.type == DatabaseType.AGENS_GRAPH) {
            await this.agensGraphSave(person);
        }
    }

    /**
     * On Neo4j we can perform a save using an atomic CYPHER statement, like that found in save-urbanite.cypher.
     * @param person
     */
    private async neo4jSave(person: Urbanite): Promise<void> {
        const urbaniteProps = ObjectUtils.primitiveProps(person);
        const parameters = {
            urbaniteProps: urbaniteProps,
            metros: person.favoriteHaunts.map(it => it.name)
        };
        const statement = new QuerySpecification(this.saveUrbanite).bind(parameters);
        await this.persistenceManager.execute(statement);
    }

    /**
     * On AgensGraph cypher read clauses cannot follow update clauses, which we relied upon to unpack the person object
     * into the graph, in the Neo4j version.
     *
     * However, since we're in a transaction, we can perform a sequence of write operations relying on the fact that
     * we can read uncommitted data while within the transaction.
     *
     * This can be a good option on Neo4j too.
     *
     * @param person
     */
    private async agensGraphSave(person: Urbanite): Promise<void> {
        // TODO: Implement agens-graph version after https://github.com/liberation-data/drivine/issues/59 addressed.
        this.logger.debug(`TODO: Implement save ${person}`);
        return Promise.resolve();
    }
}
