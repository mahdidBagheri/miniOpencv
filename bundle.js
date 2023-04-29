(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class cvImage
{

}
},{}],2:[function(require,module,exports){
const {ImageLoader} = require('./io/ImageLoader.js')
const {cvImage} = require('./DataStructs/Image.js')

class Opencv
{
    static imread(link)
    {
        if(typeof(link) == "canvas")
        {
            let cv_image = ImageLoader.read_image_by_canvas(canvas)
        }

    }

    static imwrite()
    {

    }
}
},{"./DataStructs/Image.js":1,"./io/ImageLoader.js":3}],3:[function(require,module,exports){
const {cvImage} = require("../DataStructs/Image.js") 

class ImageReader
{
    static read_image_by_canvas(canvas)
    {
        const ctx = canvas.getContext("2d")
        let imageData = ctx.getImageData()
        let width = canvas.width
        let hight = canvas.hight
        
        let image_array = []

        
    }
}

module.exprots = {ImageReader}
},{"../DataStructs/Image.js":1}]},{},[2]);
