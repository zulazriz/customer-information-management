var express = require("express");
var cors = require('cors')
require('dotenv').config();
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;
const api = require("./api");

app.listen(port, function () {
    console.log(`Server is running on localhost ${port}`);
    console.log('Running on env boy', process.env.ENVIRONMENT);
});

app.use("/", api);

// app.get('/about', (request,response) => {
//     response.send({
//         "name": "zul",
//         "age": 23
//     })
// })

module.exports = app;