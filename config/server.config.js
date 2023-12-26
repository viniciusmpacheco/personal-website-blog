const consign = require('consign')
const express = require('express')
const app = express()
const router = express.Router()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'));
app.use(express.static('node_modules'));

consign().include('./src/routes').into(app)

module.exports = app