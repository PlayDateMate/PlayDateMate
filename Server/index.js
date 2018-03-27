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
}).catch(console.log)

//Auth login endpoints
app.post('/api/auth',  (req, res) => {
    
    jwt.verify(req.body.token, CLIENT_SECRET, {algorithm: 'HS256'},  (err, decoded) => {
        let db = app.get('db');
        if (err){
            console.log('Authorization failed', err);
            next(err);
        }
        let { name, email, sub } = decoded;
        
         db.find_user([sub]).then(async (resp) => {
            console.log("hur dur dur")
            let user = resp[0];
            let id = '';
            if  (!user) {
                  console.log('did we get here?')
                    id = await db.create_user([decoded.name, decoded.picture, decoded.sub ])
                    let token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d'})
                    req.session.id = id;
                    
                    res.status(200).send(token, id)
                
            } else {
                console.log("how about here?")
                id = user.id;
                req.session.id = id;
                console.log('are we hitting this?', req.session, req.session.id)
                let token = jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d'})
                res.status(200).send({token, id});
            }
        })
        
    })
})


//================user endpoints===============
// app.post('/api/user', user_controller.addUser)
app.get('/api/getUser/:id', (req,res)=>{
    let db = app.get('db');
    console.log('id check', req.params.id)
    db.get_user([req.params.id]).then(response =>{
        res.status(200).send({response})
    })
   
})

app.listen(SERVER_PORT, ()=> console.log(`The server is under attack at port ${SERVER_PORT}`))
