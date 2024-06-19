const router = require('./routes/routes')
const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router);

const port = process.env.PORT
app.listen(port, () => {
    console.log("running on port: " + port);
})