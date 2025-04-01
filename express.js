const express = require('express')
const app= express()//express is also  function. 
const port=3000
//app.get(route,requestHandler[middleware])
app.get('/',function(req,res) {
    res.send("hello World heya yahyayaya")
})

app.get('/profile',(req,res)=>{
    res.send("Champions hu bhaiiii bahut tagda wala")
})
app.get('/your-route', (req, res) => {
    res.send("Champions hu bhaiiii bahut tagda wala");
});
app.listen(port)