/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint devel: true, asi: true */
/*global HTMLElement: true, NodeList: true */


/* Set Attributes
 * Sets HTML attributes (eg. id, class, styles) using JSON. 
 * Inspired by http://stackoverflow.com/questions/12274748/
 *
 * Usage: element.setAttributes({ attribute: value })
 */
if (!HTMLElement.prototype.setAttributes) {
	HTMLElement.prototype.setAttributes = function (attributes) {
        "use strict";
        
        var a
        for (a in attributes) {
            if (attributes.hasOwnProperty(a)) {
                if ((a === "styles" || a === "style") && typeof attributes[a] === "object") {
                    this.css(attributes[a])
                } else if (a === "html") {
                    this.innerHTML = attributes[a]
                } else {
                    this.setAttribute(a, attributes[a])
                }
            }
        }
		return this
	}
}

/* Set Attributes
 * Implements Set Attributes for NodeLists.
 *
 * Usage: nodeList.setAttributes({ attribute: value })
 */
if (!NodeList.prototype.setAttributes) {
	NodeList.prototype.setAttributes = function (attributes) {
        "use strict";
        
        var i
		for (i = 0; i < this.length; i++) {
			this[i].setAttributes(attributes)
		}
		return this
	}
}