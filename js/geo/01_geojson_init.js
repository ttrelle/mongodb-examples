use geo
db.shapes.drop()
s = db.shapes

// insert GeoJSON geometries
s.insert( {_id: "P1", shape: {type: "Point", coordinates: [2,2] } } )
s.insert( {_id: "P2", shape: {type: "Point", coordinates: [3,6] } } )
s.insert( {_id: "Poly1", shape: {type: "Polygon", coordinates: [[ [3,1], [1,2], [5,6], [9,2], [4,3], [3,1] ]] } })
s.insert( {_id: "LS1", shape: {type: "LineString", coordinates: [ [5,2], [7,3], [7,5], [9,4] ] } } )

// new 2dsphere index
s.ensureIndex({shape: "2dsphere"})
s.getIndexes()
