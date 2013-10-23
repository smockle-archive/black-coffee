/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */
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

// Test Contains
// Usage: _.test();

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