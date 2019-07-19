const express = require('express');
const mongoose = require('mongoose');
const passport = require("passport");
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//initialize app
const app = express();

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.json());
app.use(cors());

//bring in the db config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log(`Database connected successfully ${db}`))
    .catch(err => console.log(`unable to connect to database ${err}`));

//import routes
const users = require('./routes/api/users');
app.use('/api/users', users);

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//serve application
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));