//jab bhi server koi request acccept karta hai and hm jab bhi ussko bich me rokte hai and kuch perform karte 
const express = require('express')
const app= express()//express is also  function. 
const port=3000
//app.get(route,requestHandler[middleware])

app.use(function(req,res,next){
   console.log("middle ware chalgaya bhai ");
    next( new Error("Something went wrong "))
}
);
app.get('/',function(req,res) {
    res.send("hello World jjjjjheya yahyayaya")
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(port)