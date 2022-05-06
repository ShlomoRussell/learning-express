const express = require('express');
const fs = require("fs");

const clientDirectory = "client"
const app = express();
const PORT = 5678;

const api = fs.readFileSync("api.json", 'utf-8')
app.get("/api/me", (req, res) => {
    res.contentType('application/json')
    res.send(api)
})
app.use("/", express.static(clientDirectory))

app.listen(PORT, () => console.log(`server started at port ${ PORT }`))