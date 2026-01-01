 
 
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
 
 async function sortPolling(params) {
      const response = await fetch('/getdata', {
        });
      return response.json();
      response.then(res => {
        console.log(res);
        if (res.data && res.data.length > 0) {
          logMessage('New update: ' + JSON.stringify(res.data));
        } else {
          logMessage('No update (timeout)');
        }
      }).catch(error => {
        console.log(error);
        logMessage('Error occurred. Retrying...');
        setTimeout(() => sortPolling(params), 3000);
      }); 
    }
    // Start polling with sorting parameter when page loads
    function startPolling() {
      setInterval(() => sortPolling({ sortBy: 'date' }), 5000);
    }
    startPolling();