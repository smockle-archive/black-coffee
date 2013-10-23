/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */
/*global NodeList: true */

//
// NODELIST
//

// Add Class
// Usage: nodeList.addClass(className)

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

// Add Event Listener
// Usage: nodeList.addEventListener(event, callback)

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

// CSS
// Usage: nodeList.css({ property: value })

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

// For Each
// Usage: nodeList.forEach(callback)

if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback) {
        "use strict";
        return this.toArray().forEach(callback)
	}
}

// Map
// Usage: nodeList.map(callback)

if (!NodeList.prototype.map) {
	NodeList.prototype.map = function (callback) {
        "use strict";
        return this.toArray().map(callback)
	}
}

// Remove Class
// Usage: nodeList.removeClass(className)

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

// Set Attributes
// Inspired by http://stackoverflow.com/questions/12274748/
// Usage: nodeList.setAttributes({ attribute: value })

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

// To Array
// Usage: nodeList.toArray()

if (!NodeList.prototype.toArray) {
	NodeList.prototype.toArray = function () {
        "use strict";
        return Array.prototype.slice.call(this)
	}
}