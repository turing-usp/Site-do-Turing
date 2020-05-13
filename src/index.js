const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

PORT_TO_LISTEN = process.env.PORT || 3333;
app.listen(PORT_TO_LISTEN, () => {
    console.log('Server listening on port', PORT_TO_LISTEN)
});

