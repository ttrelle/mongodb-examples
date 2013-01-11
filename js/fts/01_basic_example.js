// create text index
db.txt.drop()
db.txt.ensureIndex( {txt: "text"} )
db.txt.getIndices()

// insert data
db.txt.insert( {txt: "I am your father, Luke"} )
db.txt.validate()

// search
db.txt.runCommand( "text", { search : "father" } )