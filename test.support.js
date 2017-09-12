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



//: @client:
var pyp = require("./pyp.support.js");
//: @end-client







//: @client:
describe("pyp", function () {

	describe("`pyp( [ 1, 2, 3, 'hello' ], STRING )`", function () {
		it("should be equal to 'hello'", function () {
			assert.equal(pyp([1, 2, 3, "hello"], STRING), "hello");
		});
	});

	describe("`pyp( [ 1, 2, 3 ], 2 )`", function () {
		it("should be equal to 2", function () {
			assert.equal(pyp([1, 2, 3], 2), 2);
		});
	});

	describe("`pyp( [ 1, 2, 3 ], NUMBER )`", function () {
		it("should be equal 1", function () {
			assert.equal(pyp([1, 2, 3], NUMBER), 1);
		});
	});

	describe("`pyp( [ { }, 1, 2, 3, { 'hello': 'world' } ], OBJECT )`", function () {
		it("should be equal to empty object", function () {
			assert.deepEqual(pyp([{}, 1, 2, 3, { "hello": "world" }], OBJECT), {});
		});
	});

	describe("`pyp( [ true, new Date( ), { }, 'hello' ], new Date( ) )`", function () {
		it("should be equal instance of Date", function () {
			var date = new Date();

			assert.equal(pyp([true, date, {}, "hello"], date), date);
		});
	});

	describe("`pyp( [ 1, 2, 3, { }, function hello( ){ return 'hello' } ], FUNCTION )`", function () {
		it("should be equal to function hello( ){ return 'hello' }", function () {
			var hello = function hello() {return "hello";};

			assert.deepEqual(pyp([1, 2, 3, {}, hello], FUNCTION), hello);
		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicHlwIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiU1RSSU5HIiwiTlVNQkVSIiwiZGVlcEVxdWFsIiwiT0JKRUNUIiwiZGF0ZSIsIkRhdGUiLCJoZWxsbyIsIkZVTkNUSU9OIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxrQkFBVCxDQUFaO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCQSxVQUFVLHVDQUFWLEVBQW1ELFlBQU87QUFDekRDLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsT0FBWCxDQUFMLEVBQTJCSSxNQUEzQixDQUFkLEVBQW1ELE9BQW5EO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUseUJBQVYsRUFBcUMsWUFBTztBQUMzQ0MsS0FBSSxzQkFBSixFQUE0QixZQUFPO0FBQ2xDSixVQUFPSyxLQUFQLENBQWNILElBQUssQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTCxFQUFrQixDQUFsQixDQUFkLEVBQXFDLENBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxtQkFBSixFQUF5QixZQUFPO0FBQy9CSixVQUFPSyxLQUFQLENBQWNILElBQUssQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTCxFQUFrQkssTUFBbEIsQ0FBZCxFQUEwQyxDQUExQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSixVQUFVLHlEQUFWLEVBQXFFLFlBQU87QUFDM0VDLEtBQUksaUNBQUosRUFBdUMsWUFBTztBQUM3Q0osVUFBT1EsU0FBUCxDQUFrQk4sSUFBSyxDQUFFLEVBQUYsRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsRUFBRSxTQUFTLE9BQVgsRUFBaEIsQ0FBTCxFQUE2Q08sTUFBN0MsQ0FBbEIsRUFBeUUsRUFBekU7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQU4sVUFBVSwyREFBVixFQUF1RSxZQUFPO0FBQzdFQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87QUFDOUMsT0FBSU0sT0FBTyxJQUFJQyxJQUFKLEVBQVg7O0FBRUFYLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxDQUFFLElBQUYsRUFBUVEsSUFBUixFQUFjLEVBQWQsRUFBbUIsT0FBbkIsQ0FBTCxFQUFtQ0EsSUFBbkMsQ0FBZCxFQUF5REEsSUFBekQ7QUFDQSxHQUpEO0FBS0EsRUFORDs7QUFRQVAsVUFBVSwwRUFBVixFQUFzRixZQUFPO0FBQzVGQyxLQUFJLHdEQUFKLEVBQThELFlBQU87QUFDcEUsT0FBSVEsUUFBUSxTQUFTQSxLQUFULEdBQWlCLENBQUUsT0FBTyxPQUFQLENBQWdCLENBQS9DOztBQUVBWixVQUFPUSxTQUFQLENBQWtCTixJQUFLLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsRUFBWCxFQUFnQlUsS0FBaEIsQ0FBTCxFQUE4QkMsUUFBOUIsQ0FBbEIsRUFBNERELEtBQTVEO0FBQ0EsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0ExQ0Q7QUEyQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJweXBcIixcblx0XHRcdFwicGF0aFwiOiBcInB5cC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHlwLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJweXBcIjogXCJweXBcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHB5cCA9IHJlcXVpcmUoIFwiLi9weXAuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJweXBcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIDEsIDIsIDMsICdoZWxsbycgXSwgU1RSSU5HIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdoZWxsbydcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggcHlwKCBbIDEsIDIsIDMsIFwiaGVsbG9cIiBdLCBTVFJJTkcgKSwgXCJoZWxsb1wiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHB5cCggWyAxLCAyLCAzIF0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMlwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBweXAoIFsgMSwgMiwgMyBdLCAyICksIDIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIDEsIDIsIDMgXSwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIDFcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggcHlwKCBbIDEsIDIsIDMgXSwgTlVNQkVSICksIDEgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIHsgfSwgMSwgMiwgMywgeyAnaGVsbG8nOiAnd29ybGQnIH0gXSwgT0JKRUNUIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGVtcHR5IG9iamVjdFwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcHlwKCBbIHsgfSwgMSwgMiwgMywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9IF0sIE9CSkVDVCApLCB7IH0gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHlwKCBbIHRydWUsIG5ldyBEYXRlKCApLCB7IH0sICdoZWxsbycgXSwgbmV3IERhdGUoICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgaW5zdGFuY2Ugb2YgRGF0ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBweXAoIFsgdHJ1ZSwgZGF0ZSwgeyB9LCBcImhlbGxvXCIgXSwgZGF0ZSApLCBkYXRlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHB5cCggWyAxLCAyLCAzLCB7IH0sIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9IF0sIEZVTkNUSU9OIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZ1bmN0aW9uIGhlbGxvKCApeyByZXR1cm4gJ2hlbGxvJyB9XCIsICggKSA9PiB7XG5cdFx0XHRsZXQgaGVsbG8gPSBmdW5jdGlvbiBoZWxsbyggKXsgcmV0dXJuIFwiaGVsbG9cIiB9O1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweXAoIFsgMSwgMiwgMywgeyB9LCBoZWxsbyBdLCBGVU5DVElPTiApLCBoZWxsbyApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
