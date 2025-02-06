const express = reqire('express');
const app = express();
const User = require('./models/user');

app.get('/secret',(req,res) => {
    res.send('secret');
});

app.listen(3000,() =>{
    console.log('ポート3000で待機中...');
})