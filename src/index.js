import express from 'express'
import path from 'path'
// var express = require('express')
// var path = require('path')

var app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
})

app.listen(3000, () => {
    console.log('working')
})