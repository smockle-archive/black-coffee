/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint devel: true, asi: true */
/*global HTMLElement: true, NodeList: true */


/* Add Class
 * Implements Add Class for HTMLElements.
 *
 * Usage: element.addClass(className)
 */
if (!HTMLElement.prototype.addClass) {
	HTMLElement.prototype.addClass = function (className) {
        "use strict";
        
		this.className = this.className + " " + className
		return this
	}
}

/* Add Class
 * Implements Add Class for NodeLists.
 *
 * Usage: nodeList.addClass(className)
 */
if (!NodeList.prototype.addClass) {
	NodeList.prototype.addClass = function (className) {
        "use strict";
        
        var i
		for (i = 0; i < this.length; i++) {
			this[i].addClass(className)
		}
		return this
	}
}

/* Remove Class
 * Implements Remove Class for HTMLElements.
 * Inspired by http://stackoverflow.com/questions/2155737
 *
 * Usage: element.removeClass(className)
 */
if (!HTMLElement.prototype.removeClass) {
	HTMLElement.prototype.removeClass = function (className) {
        "use strict";
        
		this.className = this.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), "")
		return this
	}
}

/* Remove Class
 * Implements Remove Class for NodeLists.
 *
 * Usage: nodeList.removeClass(className)
 */
if (!NodeList.prototype.removeClass) {
	NodeList.prototype.removeClass = function (className) {
        "use strict";
        
        var i
		for (i = 0; i < this.length; i++) {
			this[i].removeClass(className)
		}
		return this
	}
}