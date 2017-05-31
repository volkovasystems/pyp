
const assert = require( "assert" );
const pyp = require( "./pyp.js" );

assert.equal( pyp( [ 1, 2, 3 ], 2 ), 2, "should be equal" );

assert.equal( pyp( [ 1, 2, 3 ], NUMBER ), 1, "should be equal" );

let date = new Date( );
assert.equal( pyp( [ true, date, { }, "hello" ], Date ), date, "should be equal" );

assert.equal( pyp( [ true, date, { }, "hello" ], "Date" ), date, "should be equal" );

console.log( "ok" );
