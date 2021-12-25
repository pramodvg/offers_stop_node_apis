const express = require('express')
const router = express.Router()
const registerApi = require('../controller/user_registration')
const postApi = require('../controller/user_post')

router.use(registerApi)
router.use(postApi)


module.exports = router