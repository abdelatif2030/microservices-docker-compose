const express = require('express');
const app = express();
app.get('/', (req,res)=> res.send('Frontend is running!'));
app.listen(3000, ()=> console.log('Frontend running on 3000'));
