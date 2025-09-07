const express = require('express');
const app = express();
const port = 3000;      

app.use("/welcome",(req, res, next) => {
    const modifiedReq = { ...req, "user":"Guest"}
    console.log(modifiedReq.user);
    res.send(`<h1>Welcome ${modifiedReq.user}</h1>`);
    next();
});
app.listen(port, ()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})