const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.options("*",cors())


app.use('/',require('./routes'));


app.listen(3000, () => {
  console.log("Server started at 3000");
});
