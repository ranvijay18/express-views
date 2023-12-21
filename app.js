
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const contactRouter = require('./router/contactus');
const successRouter = require('./router/success');


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})



app.listen(4000);

