const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 5000
const app = express()

'use strict';

let jsonData = require('./software.json');


app.use("/assets", express.static(path.join(__dirname, "assets")))
app.get("/Youtube", (req, res) => {res.send("<h1>Youtube WebPage</h1>" + "https://www.youtube.com/")})



app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
  console.log(jsonData);
})



