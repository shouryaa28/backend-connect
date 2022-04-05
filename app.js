const express = require('express')
const app = express();
const cors = require('cors') // if we use different technologies in the frontend then this is used for all kinds of frontend technologies

require('dotenv').config({ path: './config/.env' });

const userRoutes = require('./routes/userRoutes');

require('./config/database').connectdatabase();

// to get the data from url we use req.params and get method we get req.query but for the post method backend is used that is req.body and we use use body parser to activate that req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(cors())

app.use('/api/v1/user', userRoutes);

app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`))