# jsExam_forEach() vs map() vs while()

## Why jsExam_forEach() vs map() vs while()?

jsExam_forEach() vs map() vs while() analyses the use of two built-in 
object constructors, forEach() and map(), and the while() statement.
One function uses forEach(), another, map(), and a third, while().
Buttons generate invokde the functions to generate identical HTML
elements, but there is no discernible difference in speed.

Tests show while() is slightly faster than for() (jsPerf 2015; Popov
2012), but another indicates for() is faster than while(), closely
followed by forEach() and map() (jsPerf 2013). Ryan P.C. McQuen (2015)
concludes map() is faster than forEach() or for().

Note: JSLint excludes the use  of the for() statement (Crockford 2017).

See [`create-elements.js`](create-elements.js).

## How to use jsExam_ForEach_vs_Map_vs_While

See the [`create-elements`][0] code.

[0]: https://github.com/Project4Dimensions/project4dimensions.github.io/create-elements-en.html

## Demonstration

[`http://project4dimensions.github.io/create-elements-en.html`][1]

[1]: http://project4dimensions.github.io/create-elements-en.html

## References

Crockford, Douglas. 2017. “JSLint: Help.” 
*JSLint*. Accessed April 15.  
[http://www.jslint.com/help.html#for][2].

[2]: http://www.jslint.com/help.html#for

jsPerf. 2013. “Map vs forEach · jsPerf.” 
*jsPerf — JavaScript Performance Playground*. April 22.  
[https://jsperf.com/map-vs-foreach-on-so/5][3].

[3]: https://jsperf.com/map-vs-foreach-on-so/5

jsPerf. 2015. “For vs While · jsPerf.” 
*jsPerf — JavaScript Performance Playground*. November 30.  
[https://jsperf.com/for-vs-while-loop/6][4].

[4]: https://jsperf.com/for-vs-while-loop/6

McQuen, Ryan P. C. 2015. “.map() vs .forEach() vs for().” 
*Ryan P.C. McQuen*. October 25.  
[https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html][5].

[5]: https://ryanpcmcquen.org/javascript/2015/10/25/map-vs-foreach-vs-for.html

MDN contributors. 2017. “For - JavaScript.” 
*Mozilla Developer Network*. February 3.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for][6].

[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

———. 2017. “While - JavaScript.” 
*Mozilla Developer Network*. April 13.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while][7].

[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

———. 2017. “Array.prototype.forEach() - JavaScript.” 
*Mozilla Developer Network*. April 13.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach][8].

[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

———. 2017. “Array.prototype.map() - JavaScript.” 
*Mozilla Developer Network*. April 15.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map][9].

[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

———. 2017. “Object.keys() - JavaScript.” 
*Mozilla Developer Network*. May 5.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys][10].

[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Popov, Stoimen. 2012. “JavaScript Performance: For vs. While.” 
*Stoimen’s Web Log*. January 24.  
[http://www.stoimen.com/blog/2012/01/24/javascript-performance-for-vs-while/][11].

[11]: http://www.stoimen.com/blog/2012/01/24/javascript-performance-for-vs-while/
