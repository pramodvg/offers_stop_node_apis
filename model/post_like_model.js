const mongoose = require('mongoose')
const schema = mongoose.Schema

const post_like_schema = new schema(
    {
        postId: String,
        userId: String
    }
)

module.exports = mongoose.model('post_like', post_like_schema)
