
const assert = require( "assert" );
const pyp = require( "./pyp.js" );

assert.equal( pyp( [ 1, 2, 3, "hello" ], STRING ), "hello", "should be equal to 'hello'" );

assert.equal( pyp( [ 1, 2, 3 ], 2 ), 2, "should be equal to 2" );

assert.equal( pyp( [ 1, 2, 3 ], NUMBER ), 1, "should be equal 1" );

assert.deepEqual( pyp( [ { }, 1, 2, 3, { "hello": "world" } ], OBJECT ), { }, "should be equal to empty object" );

let date = new Date( );
assert.equal( pyp( [ true, date, { }, "hello" ], date ), date, "should be equal to the given condition which is new Date( ) value" );

let hello = function hello( ){ return "hello" };
assert.deepEqual( pyp( [ 1, 2, 3, { }, hello ], FUNCTION ),
	hello, "should be equal to function hello( ){ return 'hello' }" );

console.log( "ok" );
