import config from './config.js';
import apiRouter from './api/index.js'; 

import express from 'express';
const server = express();

//handel route for root 
server.get('/', (req,res)=>{
    res.send('Hello Express');
});

server.use('/api',apiRouter);
//to let express handel all files routing in public folder
server.use(express.static('public'));

 server.listen(config.port, ()=>{
     console.info('Express listening on port',config.port);
 });
