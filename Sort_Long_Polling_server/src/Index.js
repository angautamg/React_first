// routes.js

import routes from './routes.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(routes);
let data="Initial data";
app.get('/',(req,res)=>{
  res.sendFile('./index.html',{root:'./public/'});
});
app.get('/getdata', (req, res) => {
  res.status(200);
  res.json({data:data});
});
app.get('/updatedata', (req, res) => {
  data="Data updated at "+new Date().toLocaleTimeString();
   res.status(200);
  res.json({data:data});
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
