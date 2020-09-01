const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/api').route);
app.set('port', (process.env.PORT || 9090));


app.all('*',(req, res) => {
  res.redirect('/');
})


app.listen(app.get('port'), function () {
   console.log("Node app is running at Port: ", app.get('port'));
});
