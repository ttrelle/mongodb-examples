// create text indexn
db.textsearch.ensureIndex( {txt: "text"} );
db.textsearch.insert({txt: "The quick brown fox jumps over the lazy dog."});

// search