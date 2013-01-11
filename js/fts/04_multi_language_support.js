// prepare data
db.de.drop()
db.de.ensureIndex( {txt: "text"}, {default_language: "german"} )
db.de.insert( {txt: "Ich bin Dein Vater, Luke." } )
db.de.validate().keysPerIndex["text.de.$txt_text"]

// German queries
db.de.runCommand("text", {search: "ich"})
db.de.runCommand("text", {search: "Vater"})

// non default text
db.de.insert( {language:"english", txt: "Ich bin ein Berliner" } )

// default language: german -> no hits
db.de.runCommand("text", {search: "ich"})

// search for English -> one hit
db.de.runCommand("text", {search: "ich", language: "english"})