/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, devel: true, asi: true */
/*global _: true */

//
// ARRAY
//

// Contains
// Usage: array.contains(needle)

if (!Array.prototype.contains) {
    Array.prototype.contains = function (needle) {
        "use strict";
        return this.indexOf(needle) > -1
    }
}

// Flatten
// Usage: array.flatten()
if (!Array.prototype.flatten) {
    Array.prototype.flatten = function () {
        "use strict";
        return [].concat.apply([], this)
    }
}

// Unique
// Usage: array.unique()
if (!Array.prototype.unique) {
    Array.prototype.unique = function(a) {
        "use strict";
        return function () {
            return this.filter(a);
        }
    } (function (a,b,c) { return c.indexOf(a, b + 1) < 0; });
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
        var haystack1 = [4, 6, 51],
            haystack2 = ["4", "6", "51"]
        
        console.assert(haystack1.contains(4), "numeric array numeric contents")
        console.assert(!haystack1.contains("4"), "numeric array string contents")
        console.assert(!haystack1.contains(46), "numeric array bad combined numeric contents")
        console.assert(!haystack1.contains(1), "numeric array bad numeric contents")
        console.assert(!haystack1.contains("1"), "numeric array bad string contents")
        
        console.assert(haystack2.contains("4"), "string array string contents")
        console.assert(!haystack2.contains(46), "string array bad combined numeric contents")
        console.assert(!haystack2.contains("46"), "string array bad combined string contents")
        console.assert(!haystack2.contains(1), "string array bad numeric contents")
        console.assert(!haystack2.contains("1"), "string array bad string contents")
    
        return original()
    };
}
