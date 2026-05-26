const ImageKit = require ('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
 
async function uploadfile(buffer, fileName) {
    if (!process.env.IMAGEKIT_PRIVATE_KEY) {
        throw new Error("IMAGEKIT_PRIVATE_KEY is missing from .env")
    }

    const imagekit = new ImageKit({
        privateKey:process.env.IMAGEKIT_PRIVATE_KEY
    })

    const result =await imagekit.files.upload({

        file: await toFile(buffer, fileName || "image.jpg"),
        fileName:fileName || "image.jpg"
    })
    return result;

}

module.exports =uploadfile
