"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "pyp",
			"path": "pyp/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/pyp.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"pyp": "pyp"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const pyp = require( "./pyp.js" );
//: @end-server






//: @server:
describe( "pyp", ( ) => {

	describe( "`pyp( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to 'hello'", ( ) => {
			assert.equal( pyp( [ 1, 2, 3, "hello" ], STRING ), "hello" );
		} );
	} );

	describe( "`pyp( [ 1, 2, 3 ], 2 )`", ( ) => {
		it( "should be equal to 2", ( ) => {
			assert.equal( pyp( [ 1, 2, 3 ], 2 ), 2 );
		} );
	} );

	describe( "`pyp( [ 1, 2, 3 ], NUMBER )`", ( ) => {
		it( "should be equal 1", ( ) => {
			assert.equal( pyp( [ 1, 2, 3 ], NUMBER ), 1 );
		} );
	} );

	describe( "`pyp( [ { }, 1, 2, 3, { 'hello': 'world' } ], OBJECT )`", ( ) => {
		it( "should be equal to empty object", ( ) => {
			assert.deepEqual( pyp( [ { }, 1, 2, 3, { "hello": "world" } ], OBJECT ), { } );
		} );
	} );

	describe( "`pyp( [ true, new Date( ), { }, 'hello' ], new Date( ) )`", ( ) => {
		it( "should be equal instance of Date", ( ) => {
			let date = new Date( );

			assert.equal( pyp( [ true, date, { }, "hello" ], date ), date );
		} );
	} );

	describe( "`pyp( [ 1, 2, 3, { }, function hello( ){ return 'hello' } ], FUNCTION )`", ( ) => {
		it( "should be equal to function hello( ){ return 'hello' }", ( ) => {
			let hello = function hello( ){ return "hello" };

			assert.deepEqual( pyp( [ 1, 2, 3, { }, hello ], FUNCTION ), hello );
		} );
	} );

} );
//: @end-server






