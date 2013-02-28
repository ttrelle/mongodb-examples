// enable text search
use admin
db.runCommand( {setParameter:1, textSearchEnabled: true} )
use txt

// create text index
db.txt.drop()
db.txt.ensureIndex( {txt: "text"} )
db.txt.getIndices()

// insert data
db.txt.insert( {txt: "I am your father, Luke"} )
db.txt.validate()

// search
db.txt.runCommand( "text", { search : "father" } )
