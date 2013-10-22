/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint devel: true, asi: true */
/*global HTMLElement: true, NodeList: true */

/* CSS
 * Sets CSS properties using JSON.
 *
 * Usage: element.css({ property: value })
 */
if (!HTMLElement.prototype.css) {
	HTMLElement.prototype.css = function (properties) {
        "use strict";
        
        var p
		for (p in properties) {
            if (properties.hasOwnProperty(p)) {
                this.style[p] = properties[p]
            }
		}
		return this
	}
}

/* CSS
 * Implements CSS for NodeLists.
 *
 * Usage: nodeList.css({ property: value })
 */
if (!NodeList.prototype.css) {
	NodeList.prototype.css = function (properties) {
        "use strict";
        
        var i
		for (i = 0; i < this.length; i++) {
			this[i].css(properties)
		}
		return this
	}
}