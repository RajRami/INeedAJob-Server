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

//configure Cross-Origin-Resource-Sharing to give permission to angular client only
//Done before controller reference
const cors = require('cors')

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS'
}))

//map url path to controller
const employers = require('./controllers/employers')
app.use('/api/employers', employers)

//set the static path to the public folder, dirrect all the http requests to load index.htl
app.use(express.static(__dirname + '/public'))
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//Start express web server
const port = process.env.PORT || 3000 
app.listen(port)
module.exports = app