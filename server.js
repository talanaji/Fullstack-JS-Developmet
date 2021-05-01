import config from './config.js';
import apiRouter from './api/index.js'; 

import express from 'express';
const server = express();

server.set('view engine','ejs');

//handel route for root 
server.get('/', (req,res)=>{
    //res.send('Hello Express');
    res.render('index', {
        content:'Hello Express & EJS'
    });
});

server.use('/api',apiRouter);
//to let express handel all files routing in public folder
server.use(express.static('public'));

 server.listen(config.port, ()=>{
     console.info('Express listening on port',config.port);
 });
