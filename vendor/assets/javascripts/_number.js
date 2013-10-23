/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, devel: true, asi: true */
/*global _: true */

//
// NUMBER
//

// Contains
// Usage: number.contains(needle)

if (!Number.prototype.contains) {
    Number.prototype.contains = function (needle) {
        "use strict";
        return this.toString().indexOf(needle) > -1
    }
}

// Test Contains
// Usage: _.test();

if (window._ === undefined) {
    window._ = {}
}

_.test = function () {
    "use strict";
    var original = _.test
    return function() {
        var haystack = 1234
        console.assert(haystack.contains(1), "number numeric contents")
        console.assert(haystack.contains("1"), "number string contents")
        console.assert(haystack.contains(1234), "number full numeric contents")
        console.assert(haystack.contains("1234"), "number full string contents")
        console.assert(!haystack.contains(5), "number bad contents")
        return original()
    };
}
