<a href="https://drivine.org"> ![DrivineSplash](https://raw.githubusercontent.com/liberation-data/drivine/master/docs/images/splash.jpg)</a>
# <a href="https://drivine.org">drivine.org</a>     

# What is It?

**This sample app quick start template for [drivine.org](https://drivine.org). The intention is that you can get rolling as quickly as possible.**

## Running the App 

* Set up either Neo4j or AgensGraph on your workstation. 
* Copy the `.env.example` to `.env`. Uncomment either the Neo4j or AgensGraph settings. Edit if necessary. 
* Start the app with `npm start`. 

----

# Traffic Routes

> :warning: Please load [this gist](https://github.com/liberation-data/drivine-inspiration/blob/master/src/traffic/test-data.cypher) before running the tests or the app. 

#### Neo4j

Consult the Neo4j <a href="https://neo4j.com/developer/get-started/">quick start</a> guide for instructions getting set up. 

Open `localhost:7474` and paste the query above in the browser console. 

#### AgensGraph

Consult the AgensGraph <a href="https://bitnine.net/documentations/quick-guide-1-3.html">quick start</a> Guide to get set up.

* create vlabel Metro;
* create elabel HAS_ROUTE;

```
cd src/traffic
~/$AGENSGRAPH_HOME/bin/agens $DATABASE_NAME < ./test-data.cypher
# For example: ~/liberation-data/agensgraph/bin/agens movies < ./test-data.cypher
```

#### List routes between two cities

`GET /routes/between/:start/:dest`

Lists the routes between two cities, ordered by fastest to slowest. 

**Example:** 
`GET /routes/between/Pigalle/NYC`

**Results:**
```
[{"destination":"NYC","via":[],"travelTime":8.5},{"destination":"NYC","via":["China Town"],"travelTime":18.5},{"destination":"NYC","via":["NYC","Sta Isabel","Puerto del Postigo"],"travelTime":24},{"destination":"NYC","via":["NYC","Puerto del Postigo","Sta Isabel"],"travelTime":24},{"destination":"NYC","via":["China Town","Ermita","Puerto del Postigo","Sta Isabel"],"travelTime":24.5},{"destination":"NYC","via":["China Town","Ermita","Puerto del Postigo"],"travelTime":30},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Puerto del Postigo","Sta Isabel"],"travelTime":31},{"destination":"NYC","via":["China Town","NYC","Sta Isabel","Puerto del Postigo"],"travelTime":34},{"destination":"NYC","via":["China Town","NYC","Puerto del Postigo","Sta Isabel"],"travelTime":34},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Puerto del Postigo"],"travelTime":36.5},{"destination":"NYC","via":["NYC","Sta Isabel","Puerto del Postigo","Ermita","China Town"],"travelTime":39.5},{"destination":"NYC","via":["NYC","China Town","Ermita","Puerto del Postigo","Sta Isabel"],"travelTime":39.5},{"destination":"NYC","via":["China Town","St Germain","Intramuros","China Town"],"travelTime":44.1},{"destination":"NYC","via":["China Town","Intramuros","St Germain","China Town"],"travelTime":44.1},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Puerto del Postigo","Sta Isabel"],"travelTime":44.5},{"destination":"NYC","via":["NYC","Puerto del Postigo","Ermita","China Town"],"travelTime":45},{"destination":"NYC","via":["NYC","China Town","Ermita","Puerto del Postigo"],"travelTime":45},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Puerto del Postigo"],"travelTime":50},{"destination":"NYC","via":["NYC","Puerto del Postigo","Bastille","Divisoria","China Town"],"travelTime":51.5},{"destination":"NYC","via":["NYC","China Town","Divisoria","Bastille","Puerto del Postigo"],"travelTime":51.5},{"destination":"NYC","via":["China Town","St Germain","Intramuros","Bastille","Puerto del Postigo"],"travelTime":53.6},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Intramuros","China Town"],"travelTime":60},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Divisoria","China Town"],"travelTime":60},{"destination":"NYC","via":["NYC","Puerto del Postigo","Bastille","Intramuros","China Town"],"travelTime":65},{"destination":"NYC","via":["NYC","China Town","Intramuros","Bastille","Puerto del Postigo"],"travelTime":65}]
```

## Exercises

* Create an endpoint to mark a route between two cities as blocked. 
* Modify the routing query to handle road closures. There is a tutorial for that [here](https://liberation-data.com/saxeburg-series/2018/11/28/rock-n-roll-traffic-routing.html). 

----

# Movies

> :warning: Please load [this gist](https://github.com/liberation-data/drivine-inspiration/blob/master/src/movies/test-data.cypher) before running the tests or the app. 

#### Neo4j

Consult the Neo4j <a href="https://neo4j.com/developer/get-started/">quick start</a> guide for instructions getting set up. 

Open `localhost:7474` and paste the query above in the browser console. 

#### AgensGraph

Consult the AgensGraph <a href="https://bitnine.net/documentations/quick-guide-1-3.html">quick start</a> Guide to get set up. 

* create vlabel Person;
* create vlabel Movie;
* create elabel ACTED_IN;
* create elabel PRODUCED;
* create elabel REVIEWED
* create elabel WROTE;

```
cd src/movies
~/$AGENSGRAPH_HOME/bin/agens $DATABASE_NAME < ./test-data.cypher
# For example: ~/liberation-data/agensgraph/bin/agens traffic < ./test-data.cypher
```

#### List Movies for Actor

`GET /actors/:name/movies` 

Returns the movies for an actor. 

**Example:** 

`GET /actors/Tom%20Hanks/movies` 

**Results:**
```
{"actor":{"name":"Tom Hanks","born":1956},"movies":[{"title":"Apollo 13","tagline":"Houston, we have a problem.","released":1995},{"title":"The Da Vinci Code","tagline":"Break The Codes","released":2006},{"title":"Sleepless in Seattle","tagline":"What if someone you never met, someone you never saw, someone you never knew was the only someone for you?","released":1993},{"title":"That Thing You Do","tagline":"In every life there comes a time when that thing you dream becomes that thing you do","released":1996},{"title":"The Polar Express","tagline":"This Holiday Season… Believe","released":2004},{"title":"You've Got Mail","tagline":"At odds in life... in love on-line.","released":1998},{"title":"Joe Versus the Volcano","tagline":"A story of love, lava and burning desire.","released":1990},{"title":"A League of Their Own","tagline":"Once in a lifetime you get a chance to do something different.","released":1992},{"title":"Cast Away","tagline":"At the edge of the world, his journey begins.","released":2000},{"title":"The Green Mile","tagline":"Walk a mile you'll never forget.","released":1999},{"title":"Charlie Wilson's War","tagline":"A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire.","released":2007},{"title":"Cloud Atlas","tagline":"Everything is connected","released":2012}]}
```

## Exercises 

* Add an endpoint to list the actors that a given actor has worked with, historically. 
* Add an endpoint: Given two actors who have not worked together, calculate someone who can introduce them. 
* Try the Neo4j movies tutorial - `:play movies` in your Neo4j browser. 

----

## Troubleshooting!

The number one first-timer's mistake is to use the wrong database driver. It happens. Here's how to fix: 

* Copy `env.example` to `.env` 
* :warning: Make sure you uncomment the correct section for your database. The AgensGraph driver won't work for Neo4j and vice-versa. 

## Feedback 

#### I'm not sure how to do [xyz]

> If you can't find what you need in the Quick Start or User Guides, please [post a question on StackOverflow](https://stackoverflow.com/questions/tagged/drivine?sort=newest&pageSize=15), using the Drivine tag. 

#### I've found a bug, or have a feature request

> Please raise a <a href="https://github.com/liberation-data/drivine/issues">GitHub</a> issue.


## License

Copyright (c) 2019 Liberation Data

This quick start is released under <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>.
