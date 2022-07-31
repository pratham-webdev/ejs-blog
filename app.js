// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
import express from 'express';
// const express = require('express');
const app = express();

import fetch from 'node-fetch';

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    const imgRun = async()=> {
        const body = await fetch('https://api.imgflip.com/get_memes').then((response) => response.json())
        // console.log(body);
        res.render('pages/index', {foo:body.data.memes});
    }

    imgRun();
    
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('port is active');
});