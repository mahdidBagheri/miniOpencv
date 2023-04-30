const {ImageReader} = require('./io/ImageReader.js')
const {cvImage} = require('./DataStructs/Image.js')

class Opencv
{
    
    static imread(link)
    {
        if(typeof(link) == "string")
        {
            let cv_image = ImageReader.read_image_by_address(link)
            return cv_image
        }

    }

    static imwrite()
    {

    }
}

module.exports = {Opencv}