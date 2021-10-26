const ejs = require('ejs');
const path = require('path'); 
const express = require('express'), 
    app = express(),
    port = 3000,
    engine = require('ejs-mate'); 


app.use('/', express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs');
app.engine('ejs', engine);


// ROUTES
app.get('/', (req, res) => {
  res.render ('index'); 
})


// PORT

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})