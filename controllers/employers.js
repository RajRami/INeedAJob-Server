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

// POST: /api/employers => save new employer from request body
router.post('/', (req, res) => {
    Employer.create(req.body, (err, newEmployer) => {
        if (err) {
            return res.json(err).status(400)
        }
        else {
            return res.json(newEmployer).status(201)
        }
    })
})

//DELETE: /api/employers/abc123 => delete the selected employer
router.delete('/:_id', (req, res) => {
    Employer.findOneAndDelete({ _id: req.params._id}, (err, deleteResponse) => {
        if(err){
            return res.json(err).status(400)
        }
        else{
            return res.json(deleteResponse).status(200)
        }
    })
})

//PUT: /api/employers/abc123 => update the selected employer
router.put('/:_id', (req, res) => {
    Employer.findOneAndUpdate({ _id: req.params._id}, req.body, (err, employer) => {
        if(err){
            return res.json(err).status(400)
        }
        else{
            return res.json(employer).status(202)
        }
    })
})

module.exports = router