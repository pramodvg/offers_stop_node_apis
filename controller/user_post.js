const express = require('express')
const route = express.Router()
const mdb_user_post = require('../model/upload_post_model')
const upload = require('./file_upload')
var path = require('path')
var fs = require('fs')
var response = { id: 0, msg: "", statusCode: 0 }

route.post('/upload_post', upload.single('post_image'),async (req,res)=>{

    try{
        
            let postData = mdb_user_post()
            postData.uid = req.body.uid
            postData.description = req.body.description
            postData.user_name = req.body.user_name
            postData.lat = req.body.lat
            postData.log = req.body.log
            postData.shopId = req.body.shopId
            postData.post_image = {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
            let newPostData = await postData.save()
            response.id = newPostData.id
            response.msg = "Post Uploaded Successfully."
            response.statusCode = 202
      
    }catch (e){
        response.statusCode = 404
        response.msg = e
    }
    res.json(response)
})


module.exports = route