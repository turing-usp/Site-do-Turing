const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333); //utilize route 3333 for backend on development

