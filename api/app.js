const express = require("express");
const cors = require('cors');
const PORT = 5050;
const app = express();

app.use(cors());

var weather = require("./modules/weather");
app.use("/api/weather",weather);


app.listen(PORT, () =>{
  console.log(`Example app listening on port ${PORT}`)
})

