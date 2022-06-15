let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
const db = require('./model/index');

db.sequelize.sync().then(() => {
    console.log('conectamos');
});

let app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8081, () => {
    console.log('ta rodando');
});