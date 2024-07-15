const express = require('express')
const router = require ('router')
 



app.post('/public/pages/iniciosesion.html', (req, res) => {
    console.log(req.body)
    const email = req.body;
    const passwork = req.body;
    res.send("ok")
})