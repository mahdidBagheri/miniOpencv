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