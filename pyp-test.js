
const assert = require( "assert" );
const pyp = require( "./pyp.js" );

assert.equal( pyp( [ 1, 2, 3, "hello" ], STRING ), "hello", "should return 'hello'" );

assert.equal( pyp( [ 1, 2, 3 ], 2 ), 2, "should be equal" );

assert.equal( pyp( [ 1, 2, 3 ], NUMBER ), 1, "should be equal" );

assert.deepEqual( pyp( [ { }, 1, 2, 3, { "hello": "world" } ], OBJECT ), { }, "should return empty object" );

let date = new Date( );
assert.equal( pyp( [ true, date, { }, "hello" ], Date ), date, "should be equal" );

assert.equal( pyp( [ true, date, { }, "hello" ], "Date" ), date, "should be equal" );

let hello = function hello( ){ return "hello" };
assert.deepEqual( pyp( [ 1, 2, 3, { }, hello ], FUNCTION ), hello, "should be equal" );

console.log( "ok" );
