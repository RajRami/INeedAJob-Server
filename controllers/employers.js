const express = require('express')
const router = express.Router()
const Employer = require('../models/employer')

// GET: /api/employers => return all employer data as json
router.get('/', (req, res) => {
    Employer.find((err, employers) => {
        if (err) {
            return res.json(err).status(404)
        }
        else {
            return res.json(employers).status(200)
        }
    }).sort('name')
})

module.exports = router