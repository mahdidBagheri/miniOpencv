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