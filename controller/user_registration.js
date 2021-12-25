const express = require('express')
const router = express.Router()
const mdb_user_model = require('../model/user_register_model')
var fs = require('fs')
var path = require('path')
var upload = require('./file_upload')


var response = { id: 0, msg: "", statusCode: 0 }


router.post('/register_user', upload.single('user_image'), async (req, res) => {

    try {
        if (req.body.email && req.body.user_name) {
            let existingUser = await mdb_user_model.findOne({ email: req.body.email });
            if (!existingUser) {

                let userData = mdb_user_model()
                userData.email = req.body.email
                userData.user_name = req.body.user_name
                userData.user_image = {
                    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    contentType: 'image/png'
                }


                let newUser = await userData.save()

                response.id = newUser.id
                response.msg = "Register Successfully"
                response.statusCode = 200
                req.session.userId = response.id;
            } else {
                response.msg = "User already exists"
            }
        }
    } catch (e) {
        response.msg = e
        response.statusCode = 404
    }
    res.json(response);
})

router.get('/register_user', async (req, res) => {
    if (req.session.userId) {

        mdb_user_model.find({
            id: req.session.userId
        }, (err, items) => {
            if (err) {
                console.log(err);
                res.status(500).send('An error occurred', err);
            }
            else {
                res.render('imagesPage', { items: items });
            }
        });
    } else {
        response.msg = req.session.userId
        response.statusCode = 201
    }
    res.json(response);
})



module.exports = router;