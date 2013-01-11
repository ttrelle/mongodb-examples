// prepare data
db.mail.drop()
db.mail.ensureIndex( {subject: "text", body: "text"}, {weights: {subject: 10} } )
db.mail.getIndices()
db.mail.insert( {subject: "Robot leader to minions", body: "Humans suck", prio: 0 } )
db.mail.insert( {subject: "Human leader to minions", body: "Robots suck", prio: 1 } )

// search
db.mail.runCommand("text", {search: "robot", filter: {prio:0} } )