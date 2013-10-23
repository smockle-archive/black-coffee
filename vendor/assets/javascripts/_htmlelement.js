/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */
/*global HTMLElement: true */

//
// HTMLELEMENT
//

// Add Class
// Usage: element.addClass(className)

if (!HTMLElement.prototype.addClass) {
	HTMLElement.prototype.addClass = function (className) {
        "use strict";
        
		this.className = this.className + " " + className
		return this
	}
}

// CSS
// Usage: element.css({ property: value })

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

// Remove Class
// Inspired by http://stackoverflow.com/questions/2155737
// Usage: element.removeClass(className)

if (!HTMLElement.prototype.removeClass) {
	HTMLElement.prototype.removeClass = function (className) {
        "use strict";
        
		this.className = this.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), "")
		return this
	}
}

// Set Attributes
// Inspired by http://stackoverflow.com/questions/12274748/
// Usage: element.setAttributes({ attribute: value })

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