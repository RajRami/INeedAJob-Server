//dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.set('strictQuery', true);

//create the app and set it to parse the JSON
const app = express()
app.use(bodyParser.json())

//use dot env if not in production mode
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

//Databse connection
mongoose.connect(process.env.DATABASE_URL, {})
.then((res) => {
    console.log('Connected')
}).catch((err) => {
    console.log('Cannot Connect')
})

//map url path to controller
const employers = require('./controllers/employers')
app.use('/api/employers', employers)

//Start express web server
const port = process.env.PORT || 3000 
app.listen(port)
module.exports = app