const express = require('express')
const route = express()

route.get('/', async (req, res) => {
    res.send('<html> <head> <title>Hello World</title> <meta name="description" content="Trailhead Link" /> <meta name="title" property="og:title" content="Trailhead" /> <meta property="og:type" content="Website" /> <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51936695175_5b473c1c7b_z.jpg"  /> <meta name="description" property="og:description" content="Trailhead Link" /> <meta name="author" content="Yash Anghan" /> </head> <body> <h1>Hello World</h1> </body> </html >')
})

module.exports = route