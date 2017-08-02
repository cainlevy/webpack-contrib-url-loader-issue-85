"use strict";
exports.__esModule = true;

var webpack_md_png_1 = require("./webpack-md.png");
var webpack_sm_png_1 = require("./webpack-sm.png");

var md2 = require('./webpack-md.png');
var sm2 = require('./webpack-sm.png');

function img(src) {
    var el = document.createElement('img');
    el.src = src;
    return el;
}

document.body.appendChild(img(webpack_md_png_1["default"]));
document.body.appendChild(img(webpack_sm_png_1["default"]));

document.body.appendChild(document.createElement('hr'));

document.body.appendChild(img(md2));
document.body.appendChild(img(sm2));
