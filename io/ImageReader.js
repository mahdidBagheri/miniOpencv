const {cvImage} = require("../DataStructs/Image.js") 
var fs = require('fs')

class ImageReader
{
    static read_image_by_address(address)
    {
        var buffer = fs.readFileSync(address)
        let a = 0;
        let b = 0;
    }




}




module.exports = {ImageReader}