/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */
/*global HTMLElement: true */

//
// ELEMENT
//

// Closest
// Usage: element.closest(selector)

this.Element && function (ElementPrototype) {
    ElementPrototype.closest = 
    function (selector) {
        var node = this;
        while (node) {
            if (node == document) return undefined;
            if (node.matches(selector)) return node; 
            node = node.parentNode;
        }
    }
} (Element.prototype);

// Matches
// Usage: element.matches(selector)

this.Element && function (ElementPrototype) {
    ElementPrototype.matches = ElementPrototype.matches ||
    ElementPrototype.matchesSelector || 
    ElementPrototype.mozMatchesSelector ||
    ElementPrototype.msMatchesSelector ||
    ElementPrototype.webkitMatchesSelector ||
    function (selector) {
        var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
        while (nodes[++i] && nodes[i] != node);
        return !!nodes[i];
    }
} (Element.prototype);
