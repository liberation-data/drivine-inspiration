import { Injectable } from "@nestjs/common";
import { NonTransactionalPersistenceManager } from "@liberation-data/drivine/manager/NonTransactionalPersistenceManager";
import { QuerySpecification } from "@liberation-data/drivine/query/QuerySpecification";

@Injectable()
export class HealthRepository {
  public constructor(
    public readonly persistenceManager: NonTransactionalPersistenceManager
  ) {}

  public async countAllVertices(): Promise<number> {
    const results = await this.persistenceManager.query<any>(
      new QuerySpecification(`match (n) return count(n) as count`)
    );
    return results[0].count;
  }
}
