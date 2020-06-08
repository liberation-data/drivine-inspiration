/* This format works on both AgensGraph and Neo4j. It ccan be written a bit more efficiently in Neo4j, but this one
gets the job done */

MATCH (actor:Person {name:$1})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors)
with actor, collect(properties(coActors)) as coActorsList
RETURN {
         actor: properties(actor),
         coActors: coActorsList
       }
