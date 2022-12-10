const express = require('express')
const router = express.Router()
const Employer = require('../models/employer')

router.get('/', (req, res) => {
    Employer.find((err, employer) => {
        if(err){
            return res.json(err).status(404)
        }
        else{
            return res.json(employer).status(200)
        }
    })
})

//make public
module.exports = router