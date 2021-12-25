const express = require('express')
const route = express()

route.get('/',async (req,res)=>{
    res.send('<h1>Error 404: Path not found</h1>')
})

module.exports = route