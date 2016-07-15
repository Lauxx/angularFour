var express   = require('express'),
bodyParser  = require('body-parser'),
cors        = require('cors'),
mongoose    = require('mongoose');



var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/'));


var mongoUri = "mongodb://localhost:27017/angularDayFour";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000 ");
});