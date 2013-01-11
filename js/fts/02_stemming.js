// create text index
db.txt.drop()
db.txt.ensureIndex( {txt: "text"} )

// insert data
db.txt.insert({txt: "I'm still waiting"})
db.txt.insert({txt: "I waited for hours"})
db.txt.insert({txt: "He waits"})

// search
db.txt.runCommand("text", {search: "wait"})
