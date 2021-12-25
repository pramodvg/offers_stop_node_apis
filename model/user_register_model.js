const mongoose = require('mongoose')
const schema = mongoose.Schema

const user_register_schema = new schema(
    {
        email : String,
        user_name : String,
        user_image:
        {
            data: Buffer,
            contentType: String
        }
    }
)
module.exports =  mongoose.model('user_registration', user_register_schema)