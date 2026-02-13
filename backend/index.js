const express = require('express');
const app = express();
app.get('/api', (req,res)=> res.json({message:'Backend running'}));
app.listen(3000, ()=> console.log('Backend running on 3000'));
app.get('/metrics', (req,res)=>{
  res.send('# HELP dummy_metric A dummy metric\n# TYPE dummy_metric counter\ndummy_metric 1');
});
