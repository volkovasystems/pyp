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

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:
describe("pyp", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`pyp( [ 1, 2, 3, 'hello' ], STRING )`", function () {
		it("should be equal to 'hello'", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return pyp( [ 1, 2, 3, "hello" ], STRING );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "hello");
		});
	});

	describe("`pyp( [ 1, 2, 3 ], 2 )`", function () {
		it("should be equal to 2", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return pyp( [ 1, 2, 3 ], 2 );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, 2);
		});
	});

	describe("`pyp( [ 1, 2, 3 ], NUMBER )`", function () {
		it("should be equal 1", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return pyp( [ 1, 2, 3 ], NUMBER );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, 1);
		});
	});

	describe("`pyp( [ { }, 1, 2, 3, { 'hello': 'world' } ], OBJECT )`", function () {
		it("should be equal to empty object", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return JSON.stringify( pyp( [ { }, 1, 2, 3, { "hello": "world" } ], OBJECT ) );
   				}
   
   			).value;
   			//: @end-ignore

			assert.deepEqual(JSON.parse(result), {});
		});
	});

	describe("`pyp( [ true, new Date( ), { }, 'hello' ], new Date( ) )`", function () {
		it("should be equal instance of Date", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let date = new Date( );
   
   					return pyp( [ true, date, { }, "hello" ], date ) == date;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);
		});
	});

	describe("`pyp( [ 1, 2, 3, { }, function hello( ){ return 'hello' } ], FUNCTION )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let hello = function hello( ){ return "hello" };
   
   					return pyp( [ 1, 2, 3, { }, hello ], FUNCTION ) === hello;
   				}
   
   			).value;
   			//: @end-ignore

			assert.deepEqual(result, true);
		});
	});

});
//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCIsImRlZXBFcXVhbCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHVDQUFWLEVBQW1ELFlBQU87QUFDekRJLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QztBQUNIOzs7Ozs7Ozs7QUFTQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLE9BQXRCO0FBQ0EsR0FkRDtBQWVBLEVBaEJEOztBQWtCQU4sVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDSSxLQUFJLHNCQUFKLEVBQTRCLFlBQU87QUFDbEM7QUFDSDs7Ozs7Ozs7O0FBU0E7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixDQUF0QjtBQUNBLEdBZEQ7QUFlQSxFQWhCRDs7QUFrQkFOLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREksS0FBSSxtQkFBSixFQUF5QixZQUFPO0FBQy9CO0FBQ0g7Ozs7Ozs7OztBQVNBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsQ0FBdEI7QUFDQSxHQWREO0FBZUEsRUFoQkQ7O0FBa0JBTixVQUFVLHlEQUFWLEVBQXFFLFlBQU87QUFDM0VJLEtBQUksaUNBQUosRUFBdUMsWUFBTztBQUM3QztBQUNIOzs7Ozs7Ozs7QUFTQTs7QUFFR1AsVUFBT1UsU0FBUCxDQUFrQkMsS0FBS0MsS0FBTCxDQUFZSCxNQUFaLENBQWxCLEVBQXdDLEVBQXhDO0FBQ0EsR0FkRDtBQWVBLEVBaEJEOztBQWtCQU4sVUFBVSwyREFBVixFQUF1RSxZQUFPO0FBQzdFSSxLQUFJLGtDQUFKLEVBQXdDLFlBQU87QUFDOUM7QUFDSDs7Ozs7Ozs7Ozs7QUFXQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCO0FBQ0EsR0FoQkQ7QUFpQkEsRUFsQkQ7O0FBb0JBTixVQUFVLDBFQUFWLEVBQXNGLFlBQU87QUFDNUZJLEtBQUksd0RBQUosRUFBOEQsWUFBTztBQUNwRTtBQUNIOzs7Ozs7Ozs7OztBQVdBOztBQUVHUCxVQUFPVSxTQUFQLENBQWtCRCxNQUFsQixFQUEwQixJQUExQjtBQUNBLEdBaEJEO0FBaUJBLEVBbEJEOztBQW9CQSxDQXBIRDtBQXFIQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHlwXCIsXG5cdFx0XHRcInBhdGhcIjogXCJweXAvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3B5cC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicHlwXCI6IFwicHlwXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmRlc2NyaWJlKCBcInB5cFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIDEsIDIsIDMsICdoZWxsbycgXSwgU1RSSU5HIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbydcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gcHlwKCBbIDEsIDIsIDMsIFwiaGVsbG9cIiBdLCBTVFJJTkcgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHB5cCggWyAxLCAyLCAzIF0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMlwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBweXAoIFsgMSwgMiwgMyBdLCAyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIDEsIDIsIDMgXSwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIDFcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gcHlwKCBbIDEsIDIsIDMgXSwgTlVNQkVSICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDEgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIHsgfSwgMSwgMiwgMywgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSwgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IG9iamVjdFwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSggcHlwKCBbIHsgfSwgMSwgMiwgMywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0sIE9CSkVDVCApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggSlNPTi5wYXJzZSggcmVzdWx0ICksIHsgfSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBweXAoIFsgdHJ1ZSwgbmV3IERhdGUoICksIHsgfSwgJ2hlbGxvJyBdLCBuZXcgRGF0ZSggKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCBpbnN0YW5jZSBvZiBEYXRlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSggKTtcblxuXHRcdFx0XHRcdHJldHVybiBweXAoIFsgdHJ1ZSwgZGF0ZSwgeyB9LCBcImhlbGxvXCIgXSwgZGF0ZSApID09IGRhdGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIDEsIDIsIDMsIHsgfSwgZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH0gXSwgRlVOQ1RJT04gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZnVuY3Rpb24gaGVsbG8oICl7IHJldHVybiAnaGVsbG8nIH1cIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgaGVsbG8gPSBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9O1xuXG5cdFx0XHRcdFx0cmV0dXJuIHB5cCggWyAxLCAyLCAzLCB7IH0sIGhlbGxvIF0sIEZVTkNUSU9OICkgPT09IGhlbGxvO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
