const {ImageLoader} = require('./io/ImageLoader.js')
const {cvImage} = require('./DataStructs/Image.js')

class Opencv
{
    static imread(link)
    {
        if(typeof(link) == "string")
        {
            let cv_image = ImageLoader.read_image_by_canvas(link)
        }

    }

    static imwrite()
    {

    }
}

module.exports = {Opencv}