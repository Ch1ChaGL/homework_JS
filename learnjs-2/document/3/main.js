'use strict';


// const arr = Array.from(document.body.childNodes);

// alert(arr);


// const parrentBody = document.body.parentNode;

// alert(parrentBody === document.documentElement);
// alert(document.head.nextSibling);
// alert(document.body.previousSibling);


// const testDiv = document.querySelector('div').firstChild;

// alert(testDiv.parentNode.nodeName);
// alert(testDiv.parentElement.nodeName);


// const testHtml = document.documentElement;


// alert(testHtml.parentNode.nodeName);
// alert(testHtml.parentElement?.nodeName);


// alert(document.querySelector('div').innerHTML);
// alert(document.querySelector('ul').innerHTML);
// alert(document.querySelector('ul').lastElementChild.textContent);

alert(document.head.nextSibling.nodeType === document.TEXT_NODE);
