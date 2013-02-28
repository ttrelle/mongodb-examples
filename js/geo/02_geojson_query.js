// define some query geometries
BOX = {type: "Polygon", coordinates: [[ [0,0], [3,0], [3,3], [0,3], [0,0] ]] }
LINESTRING = {type: "LineString", coordinates: [[1,4], [8,4]]}

// BOX query
s.find( {shape: {$geoIntersects: {$geometry: BOX}}}, {_id:1})

// LINESTRING query
s.find( {shape: {$geoIntersects: {$geometry: LINESTRING}}}, {_id:1})