require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const axios = require('axios');
const path = require('path');
const jwt = require('jsonwebtoken');
// const user_controller = require('./user_controller');

const  {
    SERVER_PORT,
    SESSION_SECRET,
    JWT_SECRET, 
    DOMAIN, 
    CLIENT_ID, 
    CLIENT_SECRET, 
    CALLBACK_URL,
    CONNECTION_STRING,
    JWT_SECRET

} = process.env;


const app = express();

app.use(express.static(__dirname + "/../build"));

app.use(cors());

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false, 
    saveUninitialized: true
}))
//connecting server to database using massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("db connected");
            console.log('Authorization failed', err);
            next(err);
        }
        
         db.find_user([sub]).then(async (resp) => {
            
            let user = resp[0];
            let id = '';
            if  (!user) {
                 
                    console.log("are we getting here?", decoded)
                    id = await db.create_user([decoded.name, decoded.picture, decoded.sub ])
                            console.log("check again", id)
                    let token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d'})
//     let db = app.get('db');
//     console.log('id check',decoded)
//     db.find_user([user.id]).then(response =>{
//         res.status(200).send({response})
//     })
   
// })

// >>>>>>> master
app.listen(SERVER_PORT, ()=> console.log(`The server is under attack at port ${SERVER_PORT}`))
