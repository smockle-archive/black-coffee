/* Black Coffee
 * Black Coffee is a collection of DOM extensions and other functions useful for pure JavaScript environments.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/*jslint plusplus: true */
/*global HTMLElement: true, NodeList: true */

/* CSS
 * Sets CSS properties using JSON.
 *
 * Usage: element.css({ property: value });
 */
if (!HTMLElement.prototype.css) {
	HTMLElement.prototype.css = function (properties) {
        "use strict";
        
        var p;
		for (p in properties) {
            if (properties.hasOwnProperty(p)) {
                this.style[p] = properties[p];
            }
		}
		return this;
	};
}

/* Set Attributes
 * Sets HTML attributes (eg. id, class, styles) using JSON. 
 * Inspired by http://stackoverflow.com/questions/12274748/
 *
 * Usage: element.setAttributes({ attribute: value });
 */
if (!HTMLElement.prototype.setAttributes) {
	HTMLElement.prototype.setAttributes = function (attributes) {
        "use strict";
        
        var a;
	    for (a in attributes) {
            if (attributes.hasOwnProperty(a)) {
                if ((a === "styles" || a === "style") && typeof attributes[a] === "object") {
                    this.css(attributes[a]);
                } else if (a === "html") {
                    this.innerHTML = attributes[a];
                } else {
                    this.setAttribute(a, attributes[a]);
                }
            }
	    }
		return this;
	};
}

/* Add Class
 * Implements Add Class for HTMLElements.
 *
 * Usage: element.addClass(className);
 */
if (!HTMLElement.prototype.addClass) {
	HTMLElement.prototype.addClass = function (className) {
        "use strict";
        
		this.className = this.className + " " + className;
		return this;
	};
}

/* Remove Class
 * Implements Remove Class for HTMLElements.
 * Inspired by http://stackoverflow.com/questions/2155737
 *
 * Usage: element.removeClass(className);
 */
if (!HTMLElement.prototype.removeClass) {
	HTMLElement.prototype.removeClass = function (className) {
        "use strict";
        
		this.className = this.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), "");
		return this;
	};
}

/* CSS
 * Implements CSS for NodeLists.
 *
 * Usage: nodeList.css({ property: value });
 */
if (!NodeList.prototype.css) {
	NodeList.prototype.css = function (properties) {
        "use strict";
        
        var i;
		for (i = 0; i < this.length; i++) {
			this[i].css(properties);
		}
		return this;
	};
}

/* Set Attributes
 * Implements Set Attributes for NodeLists.
 *
 * Usage: nodeList.setAttributes({ attribute: value });
 */
if (!NodeList.prototype.setAttributes) {
	NodeList.prototype.setAttributes = function (attributes) {
        "use strict";
        
        var i;
		for (i = 0; i < this.length; i++) {
			this[i].setAttributes(attributes);
		}
		return this;
	};
}

/* Add Class
 * Implements Add Class for NodeLists.
 *
 * Usage: nodeList.addClass(className);
 */
if (!NodeList.prototype.addClass) {
	NodeList.prototype.addClass = function (className) {
        "use strict";
        
        var i;
		for (i = 0; i < this.length; i++) {
			this[i].addClass(className);
		}
		return this;
	};
}

/* Remove Class
 * Implements Remove Class for NodeLists.
 *
 * Usage: nodeList.removeClass(className);
 */
if (!NodeList.prototype.removeClass) {
	NodeList.prototype.removeClass = function (className) {
        "use strict";
        
        var i;
		for (i = 0; i < this.length; i++) {
			this[i].removeClass(className);
		}
		return this;
	};
}

/* Add Event Listener
 * Implements Add Event Listner for NodeLists.
 *
 * Usage: nodeList.addEventListener(event, callback);
 */
if (!NodeList.prototype.addEventListener) {
	NodeList.prototype.addEventListener = function (event, callback) {
        "use strict";
        
        var i;
		for (i = 0; i < this.length; i++) {
			this[i].addEventListener(event, callback);
		}
		return this;
	};
}