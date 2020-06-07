<a href="https://drivine.org"> ![DrivineSplash](https://liberation-data.com/images/drivine.jpg)</a>
# <a href="https://drivine.org">drivine.org</a>     

# What is It?

**This sample app quick start template for [drivine.org](https://drivine.org). The intention is that you can get rolling as quickly as possible.**

## Running the App 

* Set up either Neo4j or AgensGraph on your workstation. 
* Copy the `.env.example` to `.env`. Uncomment either the Neo4j or AgensGraph settings. Edit if necessary. 
* Start the app with `npm start`. 

### Traffic Routes

Please load [this gist](https://github.com/liberation-data/drivine-inspiration/blob/master/src/traffic/test-data.cypher) before running the tests or the app. 

#### List routes between two cities

`GET /between/:start/:dest`

Lists the routes between two cities, ordered by fastest to slowest. 

**Example:** 
`GET routes/between/Pigalle/NYC`

**Results:**
```
[{"destination":"NYC","via":[],"travelTime":8.5},{"destination":"NYC","via":["China Town"],"travelTime":18.5},{"destination":"NYC","via":["NYC","Sta Isabel","Puerto del Postigo"],"travelTime":24},{"destination":"NYC","via":["NYC","Puerto del Postigo","Sta Isabel"],"travelTime":24},{"destination":"NYC","via":["China Town","Ermita","Puerto del Postigo","Sta Isabel"],"travelTime":24.5},{"destination":"NYC","via":["China Town","Ermita","Puerto del Postigo"],"travelTime":30},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Puerto del Postigo","Sta Isabel"],"travelTime":31},{"destination":"NYC","via":["China Town","NYC","Sta Isabel","Puerto del Postigo"],"travelTime":34},{"destination":"NYC","via":["China Town","NYC","Puerto del Postigo","Sta Isabel"],"travelTime":34},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Puerto del Postigo"],"travelTime":36.5},{"destination":"NYC","via":["NYC","Sta Isabel","Puerto del Postigo","Ermita","China Town"],"travelTime":39.5},{"destination":"NYC","via":["NYC","China Town","Ermita","Puerto del Postigo","Sta Isabel"],"travelTime":39.5},{"destination":"NYC","via":["China Town","St Germain","Intramuros","China Town"],"travelTime":44.1},{"destination":"NYC","via":["China Town","Intramuros","St Germain","China Town"],"travelTime":44.1},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Puerto del Postigo","Sta Isabel"],"travelTime":44.5},{"destination":"NYC","via":["NYC","Puerto del Postigo","Ermita","China Town"],"travelTime":45},{"destination":"NYC","via":["NYC","China Town","Ermita","Puerto del Postigo"],"travelTime":45},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Puerto del Postigo"],"travelTime":50},{"destination":"NYC","via":["NYC","Puerto del Postigo","Bastille","Divisoria","China Town"],"travelTime":51.5},{"destination":"NYC","via":["NYC","China Town","Divisoria","Bastille","Puerto del Postigo"],"travelTime":51.5},{"destination":"NYC","via":["China Town","St Germain","Intramuros","Bastille","Puerto del Postigo"],"travelTime":53.6},{"destination":"NYC","via":["China Town","Divisoria","Bastille","Intramuros","China Town"],"travelTime":60},{"destination":"NYC","via":["China Town","Intramuros","Bastille","Divisoria","China Town"],"travelTime":60},{"destination":"NYC","via":["NYC","Puerto del Postigo","Bastille","Intramuros","China Town"],"travelTime":65},{"destination":"NYC","via":["NYC","China Town","Intramuros","Bastille","Puerto del Postigo"],"travelTime":65}]
```


### Movies

Please load [this gist](https://github.com/liberation-data/drivine-inspiration/blob/master/src/movies/test-data.cypher) before running the tests or the app. 

#### List Movies for Actor

`GET /actors/:name/movies` 

Returns the movies for an actor. 

**Example:** 

`GET /actors/Tom%20Hanks/movies` 

**Results:**
```
{"actor":{"name":"Tom Hanks","born":1956},"movies":[{"title":"Apollo 13","tagline":"Houston, we have a problem.","released":1995},{"title":"The Da Vinci Code","tagline":"Break The Codes","released":2006},{"title":"Sleepless in Seattle","tagline":"What if someone you never met, someone you never saw, someone you never knew was the only someone for you?","released":1993},{"title":"That Thing You Do","tagline":"In every life there comes a time when that thing you dream becomes that thing you do","released":1996},{"title":"The Polar Express","tagline":"This Holiday Season… Believe","released":2004},{"title":"You've Got Mail","tagline":"At odds in life... in love on-line.","released":1998},{"title":"Joe Versus the Volcano","tagline":"A story of love, lava and burning desire.","released":1990},{"title":"A League of Their Own","tagline":"Once in a lifetime you get a chance to do something different.","released":1992},{"title":"Cast Away","tagline":"At the edge of the world, his journey begins.","released":2000},{"title":"The Green Mile","tagline":"Walk a mile you'll never forget.","released":1999},{"title":"Charlie Wilson's War","tagline":"A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire.","released":2007},{"title":"Cloud Atlas","tagline":"Everything is connected","released":2012}]}
```



## License

Copyright (c) 2019 Liberation Data

This quick start is released under <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>.
