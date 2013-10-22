/* Extend
 * Merge JSON objects.
 * Copyright © 2013 Clay Miller (clay@smockle.com)
 */

/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3 */
/*jshint browser: true, asi: true */
/*global $: true */

if (window.$ === undefined) {
    window.$ = {}
}

if ($.extend === undefined) {
    $.extend = function (base, add) {
        "use strict";
        
        if (base === undefined && add === undefined) {
            return null
            
        } else if (add === undefined) {
            return base
            
        } else {
            var output = {},
                key
            
            for (key in base) {
                if (base.hasOwnProperty(key)) {
                    output[key] = base[key]
                }
            }
            
            for (key in add) {
                if (add.hasOwnProperty(key)) {
                    output[key] = add[key]
                }
            }
            
            return output
        }
    }
}