/* Black Coffee
 * Black Coffee is a collection of DOM extensions and other functions useful for pure JavaScript environments.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/* Add Class
 * Implements Add Class for HTMLElements.
 *
 * Usage: element.addClass(className);
 */
if (!HTMLElement.prototype.addClass) {
	HTMLElement.prototype.addClass = function(className) {
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
	HTMLElement.prototype.removeClass = function(className) {
		this.className = this.className.replace(new RegExp("(\\s|^)" + className + "(\\s|$)"), "");
		return this;
	};
}

/* Add Class
 * Implements Add Class for NodeLists.
 *
 * Usage: nodeList.addClass(className);
 */
if (!NodeList.prototype.addClass) {
	NodeList.prototype.addClass = function(className) {
		for (var i = 0; i < this.length; i++) {
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
	NodeList.prototype.removeClass = function(className) {
		for (var i = 0; i < this.length; i++) {
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
	NodeList.prototype.addEventListener = function(event, callback) {
		for (var i = 0; i < this.length; i++) {
			this[i].addEventListener(event, callback);
		}
		return this;
	};
}