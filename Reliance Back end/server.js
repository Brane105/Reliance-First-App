//Load all required modules
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:27017/reliance';

app.use(bodyParser.urlencoded({ extended: true })); // enable body part data
app.use(bodyParser.json()); // json data.
app.use(cors()); // used model from line 5

//Database connection without warning
const mongooseDbOption = {
  // to avoid warning
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
};
mongoose.connect(url, mongooseDbOption); //ready to connect
mongoose.connection;

var Users = require('./router/user.router');
var Emps = require('./router/emp.router');
app.use('/', Users);
app.use('/emp', Emps);

app.listen(8080, () => console.log('server is runnig on port no.8080'));