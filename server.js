const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/taskRoutes');
const cors = require('cors');

require('dotenv').config()


const app = express();  
const PORT = process.env.PORT || 5000 ; 

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected TO MongoDB...'))
.catch((err) => console.log(err))

app.use(router);

app.listen(PORT , () => {
    console.log(`Listening on ${PORT}`);
})
