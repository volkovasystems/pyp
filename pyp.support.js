"use strict"; /*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "pyp",
              			"path": "pyp/pyp.js",
              			"file": "pyp.js",
              			"module": "pyp",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/pyp.git",
              			"test": "pyp-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Pick first occurrence of element based on condition.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"pyck": "pyck",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var pyck = require("pyck");
var zelf = require("zelf");

var pyp = function pyp(list, condition) {
	/*;
                                         	@meta-configuration:
                                         		{
                                         			"list:required": [
                                         				"Arguments",
                                         				"[*]"
                                         			],
                                         			"condition:required": [
                                         				"string",
                                         				"function",
                                         				BOOLEAN,
                                         				FUNCTION,
                                         				NUMBER,
                                         				OBJECT,
                                         				STRING,
                                         				UNDEFINED,
                                         				SYMBOL,
                                         				"[string, function]"
                                         			]
                                         		}
                                         	@end-meta-configuration
                                         */

	return pyck.bind(zelf(this))(list, condition)[0];
};

module.exports = pyp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5cC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbInB5Y2siLCJyZXF1aXJlIiwiemVsZiIsInB5cCIsImxpc3QiLCJjb25kaXRpb24iLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNRSxNQUFNLFNBQVNBLEdBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsU0FBcEIsRUFBK0I7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLFFBQU9MLEtBQUtNLElBQUwsQ0FBV0osS0FBTSxJQUFOLENBQVgsRUFBMkJFLElBQTNCLEVBQWlDQyxTQUFqQyxFQUE4QyxDQUE5QyxDQUFQO0FBQ0EsQ0F6QkQ7O0FBMkJBRSxPQUFPQyxPQUFQLEdBQWlCTCxHQUFqQiIsImZpbGUiOiJweXAuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJweXBcIixcblx0XHRcdFwicGF0aFwiOiBcInB5cC9weXAuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInB5cC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJweXBcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3B5cC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInB5cC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFBpY2sgZmlyc3Qgb2NjdXJyZW5jZSBvZiBlbGVtZW50IGJhc2VkIG9uIGNvbmRpdGlvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IHB5cCA9IGZ1bmN0aW9uIHB5cCggbGlzdCwgY29uZGl0aW9uICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRPQkpFQ1QsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRyZXR1cm4gcHljay5iaW5kKCB6ZWxmKCB0aGlzICkgKSggbGlzdCwgY29uZGl0aW9uIClbIDAgXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHlwO1xuIl19
//# sourceMappingURL=pyp.support.js.map
