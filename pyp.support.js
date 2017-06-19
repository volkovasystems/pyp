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

var doubt = require("doubt");
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

	if (!doubt(list, AS_ARRAY)) {
		throw new Error("invalid list");
	}

	return pyck.bind(zelf(this))(list, condition)[0];
};

module.exports = pyp;

//# sourceMappingURL=pyp.support.js.map