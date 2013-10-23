/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, asi: true */
/*global _: true */

//
// BLACK COFFEE
// Copyright © 2013 Clay Miller (clay@smockle.com)
// MIT Licensed
//

// Extend

if (window._ === undefined) {
    window._ = {}
}

if (_.extend === undefined) {
    _.extend = function (base, add) {
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


// Ready
// Copyright © 2013 John Resig (jeresig@gmail.com) and Clay Miller (clay@smockle.com)

if (window._ === undefined) {
    window._ = {}
}

if (_.ready === undefined) {
    _.ready = function (fn) {
        "use strict";
        
        var DOMContentLoaded
        
        /* DOM loading in modern browsers. */
        if (document.addEventListener) {
            DOMContentLoaded = function () {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false)
                fn()
            }
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false)
            window.addEventListener("load", fn, false)
        
        /* DOM loading in IE. */
        } else if (document.attachEvent) {
            DOMContentLoaded = function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", DOMContentLoaded)
                    fn()
                }
            }
            document.attachEvent("onreadystatechange", DOMContentLoaded)
            window.attachEvent("onload", fn)
        }
        
        /* DOM already loaded. */
        if (document.readyState === "complete") {
            setTimeout(fn, 1)
        }
    }
}