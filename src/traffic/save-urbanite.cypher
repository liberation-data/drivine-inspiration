MERGE (u:Urbanite { id : $urbaniteProps.id } ) set u += $urbaniteProps
WITH u UNWIND $metros AS metro MERGE (m:Metro {name: metro})
WITH u, m, metro MERGE (u)-[:FREQUENTLY_HAUNTS]->(m)
