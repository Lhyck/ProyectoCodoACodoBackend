const express = require('express')
const router = require ('router')
 



app.post('/public/pages/iniciosesion.html', (req, res) => {
    console.log(req.body)
    const name = req.body;
    const password = req.body;
    res.send("ok")
})