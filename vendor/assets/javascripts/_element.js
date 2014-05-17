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
