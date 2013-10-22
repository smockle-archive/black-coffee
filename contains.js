/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint devel: true, asi: true */

/* Contains
 * Determines whether a haystack contains a needle.
 *
 * Usage: string.contains(needle)
 */
if (!String.prototype.contains) {
    String.prototype.contains = function (needle) {
        "use strict";
        return this.indexOf(needle) > -1
    }
}

/* Contains
 * Implements contains for an Array.
 *
 * Usage: array.contains(needle)
 */
if (!Array.prototype.contains) {
    Array.prototype.contains = function (needle) {
        "use strict";
        return this.indexOf(needle) > -1
    }
}

/* Contains
 * Implements contains for an Number.
 *
 * Usage: number.contains(needle)
 */
if (!Number.prototype.contains) {
    Number.prototype.contains = function (needle) {
        "use strict";
        return this.toString().indexOf(needle) > -1
    }
}

/* Test Contains
 * Validate the correctness of contains.
 *
 * Usage: test_contains()
 */
var test_contains = function () {
    "use strict";
    
    var a = "asdf",
        b = 1234,
        c = [4, 6, 51],
        d = ["4", "6", "51"]

    console.assert(a.contains("sd"), "string middle contents")
    console.assert(a.contains("asdf"), "string full contents")
    console.assert(!a.contains("dfa"), "string bad contents")

    console.assert(b.contains(1), "number numeric contents")
    console.assert(b.contains("1"), "number string contents")
    console.assert(b.contains(1234), "number full numeric contents")
    console.assert(b.contains("1234"), "number full string contents")
    console.assert(!b.contains(5), "number bad contents")

    console.assert(c.contains(4), "numeric array numeric contents")
    console.assert(!c.contains("4"), "numeric array string contents")
    console.assert(!c.contains(46), "numeric array bad combined numeric contents")
    console.assert(!c.contains(1), "numeric array bad numeric contents")
    console.assert(!c.contains("1"), "numeric array bad string contents")

    console.assert(d.contains("4"), "string array string contents")
    console.assert(!d.contains(46), "string array bad combined numeric contents")
    console.assert(!d.contains("46"), "string array bad combined string contents")
    console.assert(!d.contains(1), "string array bad numeric contents")
    console.assert(!d.contains("1"), "string array bad string contents")

    console.log("All tests complete.")

    return true
}