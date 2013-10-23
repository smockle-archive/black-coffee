/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, devel: true, asi: true */

//
// CONSOLE
//

// Assert
// Usage: console.assert(condition, message)

if (!console.assert) {
    console.assert = function (condition, message) {
        "use strict";
        
        try {
            if (!condition) {
                console.log("Test failed. Testing " + message + ".")
                return false
            }
        } catch (e) {
            console.log("Test failed. Testing " + message + ".")
            return false
        }
        return true
    }
}