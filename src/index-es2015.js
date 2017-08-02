import md1 from './webpack-md.png'
import sm1 from './webpack-sm.png'

var md2 = require('./webpack-md.png');
var sm2 = require('./webpack-sm.png');

function img(src) {
  var el = document.createElement('img');
  el.src = src;
  return el;
}

document.body.appendChild(img(md1));
document.body.appendChild(img(sm1));

document.body.appendChild(document.createElement('hr'));

document.body.appendChild(img(md2));
document.body.appendChild(img(sm2));
