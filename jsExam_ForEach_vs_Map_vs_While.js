/* validated with JSLint edition 2017-04-10 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsExam_ForEach_vs_Map_vs_While: algorithms to generate HTML elements
 * see https://github.com/Project4Dimensions/jsCreateElements
 */

function objectForEach(obj) {
    "use strict";
    var a = document.getElementById("objectForEach");
    var b;
    var ba;
    Object.keys(obj).forEach(function (key) {
        b = document.createElement("li");
        ba = document.createElement("a");
        ba.setAttribute("href", "index-" + key + ".html");
        ba.appendChild(document.createTextNode(obj[key]));
        b.appendChild(ba);
        a.appendChild(b);
    });
}

function objectMap(obj) {
    "use strict";
    var a = document.getElementById("objectMap");
    var b;
    var ba;
    Object.keys(obj).map(function (key) {
        b = document.createElement("li");
        ba = document.createElement("a");
        ba.setAttribute("href", "index-" + key + ".html");
        ba.appendChild(document.createTextNode(obj[key]));
        b.appendChild(ba);
        a.appendChild(b);
    });
}

function objectWhile(obj) {
    "use strict";
    var a = document.getElementById("objectWhile");
    var b = Object.keys(obj);
    var c;
    var ca;
    var i = 0;
    while (i < b.length) {
        c = document.createElement("li");
        ca = document.createElement("a");
        ca.setAttribute("href", "index-" + b[i] + ".html");
        ca.appendChild(document.createTextNode(obj[b[i]]));
        c.appendChild(ca);
        a.appendChild(c);
        i += 1;
    }
}

function object() {
    "use strict";
    return {"en": "English", "it": "Italiano", "pt": "Português"};
}
