const express = require('express');
const app = express();
app.get('/auth', (req,res)=> res.json({message:'Auth service running'}));
app.listen(3001, ()=> console.log('Auth service running on 3001'));
// Dummy metrics endpoint for Prometheus
app.get('/metrics', (req, res) => {
  res.send(`# HELP auth_dummy_metric A dummy metric
# TYPE auth_dummy_metric counter
auth_dummy_metric 1`);
});
