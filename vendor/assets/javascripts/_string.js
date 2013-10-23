/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */
/*global _: true */

//
// STRING
//

// Contains
// Usage: string.contains(needle)

if (!String.prototype.contains) {
    String.prototype.contains = function (needle) {
        "use strict";
        return this.indexOf(needle) > -1
    }
}

// Test Contains
// Usage: _.test();

_.test = function () {
    "use strict";
    var original = _.test
    return function() {
        var haystack = "asdf"
        console.assert(haystack.contains("sd"), "string middle contents")
        console.assert(haystack.contains("asdf"), "string full contents")
        console.assert(!haystack.contains("dfa"), "string bad contents")
        return original()
    };
}
