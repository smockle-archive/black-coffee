/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint devel: true, asi: true */
/*global HTMLElement: true, NodeList: true */


/* Add Event Listener
 * Implements Add Event Listner for NodeLists.
 *
 * Usage: nodeList.addEventListener(event, callback)
 */
if (!NodeList.prototype.addEventListener) {
	NodeList.prototype.addEventListener = function (event, callback) {
        "use strict";
        
        var i
		for (i = 0; i < this.length; i++) {
			this[i].addEventListener(event, callback)
		}
		return this
	}
}