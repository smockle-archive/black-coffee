// This is a manifest file that'll be compiled into black-coffee.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

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