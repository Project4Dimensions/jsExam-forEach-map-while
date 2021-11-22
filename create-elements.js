/* validated with JSLint edition 2017-04-10 (http://jslint.com/)
 * no errors reported (JSLint options: Assume… a browser)
 */

/* jsCreateElements: algorithms to generate HTML elements
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
        ba.setAttribute("href", "create-elements-" + key + ".html");
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
        ba.setAttribute("href", "create-elements-" + key + ".html");
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
        ca.setAttribute("href", "create-elements-" + b[i] + ".html");
        ca.appendChild(document.createTextNode(obj[b[i]]));
        c.appendChild(ca);
        a.appendChild(c);
        i += 1;
    }
}

function object() {
    "use strict";
    var a = {"en": "English", "it": "Italiano", "pt": "Português"};
    return a;
}

function langs(lang, i) {
    "use strict";
    var a = {
        "en": ["Clicked ", " times"],
        "it": ["Cliccato ", " volte"],
        "pt": ["Clicado ", " vezes"]
    };
    return a[lang][i];
}

function rmChild(parent) {
    "use strict";
    var a = document.getElementById(parent);
    while (a.firstChild) {
        a.removeChild(a.firstChild);
    }
}

function detectClicks(button, func1, param1, func2, param2) {
    "use strict";
    var a = document.getElementById(button);
    var i = 2;
    func1(param1);
    a.onclick = function () {
        if (i % 2 === 0) {
            func2(param2);
            i += 1;
        }
        if (i % 2 !== 0) {
            func1(param1);
            i += 1;
        }
    };
}
