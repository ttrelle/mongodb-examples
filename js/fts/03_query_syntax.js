// prepare data
db.foo.drop()
db.foo.ensureIndex( {txt: "text"} )
db.foo.insert( {txt: "Robots are superior to humans"} )
db.foo.insert( {txt: "Humans are weak"} )
db.foo.insert( {txt: "I, Robot - by Isaac Asimov"} )

// query for single terms
db.foo.runCommand("text", {search: "robot"})
db.foo.runCommand("text", {search: "human"})

// OR search
db.foo.runCommand("text", {search: "human robot"})

// negation
 db.foo.runCommand("text", {search: "robot -humans"})
 
 // phrase search
 db.foo.runCommand("text", {search: '"robots are"'})
 
 // phrase search: order matters
 db.foo.runCommand("text", {search: '"are robots"'})

// no phrase search --> simple query
db.foo.runCommand("text", {search: 'are robots'})
 

