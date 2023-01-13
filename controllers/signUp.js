import {connectToMongo} from "../Models/db.js";
import {UserModel} from "../Models/User.js";
import crypto from   "crypto"

dotenv.config();
const { AUTH_SECRET  } = process.env;

import mongoose from "mongoose";
import dotenv from "dotenv";
// import {bodyParser}  from 'body-parser'
// import app from "express/lib/application.js";

// app.use(bodyParser.urlencoded({ extended: true }));


export default async function signUp(req, res) {
    console.log('bonjour inscription')
    //
    connectToMongo().then(r => r);

    // / Extraction des données depuis "req.body" (fourni par express.urlencoded() dans server.js)
    let { firstName, lastName, email, password,password_confirm } = req.body;


    console.log(email)

    // flash message
    let msg = 'hello';
    let typeMsg = '';


    if (password && password_confirm){
        if (password === password_confirm){
            console.log('bonjour mdp identique')
            // string to be hashed


            // // create a sha-256 hasher
            const sha256Hasher = crypto.createHmac("sha256", AUTH_SECRET);

            // hash the string
            const hash = sha256Hasher.update(password).digest("hex");


            const user = await UserModel.findOne({ email : email });
            console.log(user)

            if(!user){
                password = hash
                 await UserModel.insertMany({ firstName, lastName, email, password });

                // await UserModel.insertMany({ firstName, lastName, email, password });

                typeMsg = 'error'
                msg = 'votre inscription est bien valider veuillez vous authentifier';

                // on rend la vue login
                res.render("login");
            }else{
                typeMsg = 'error';
                msg = 'Un utilisateur avec cet email existe deja';
                req.session.flash = {
                    type: typeMsg,
                    message: msg
                };
                res.render("home",{  flash: req.session.flash });
            }



            console.log(msg)

            // logo all users
            const users = await UserModel.find();
            console.log(users);
        }
    }else{
        typeMsg = 'error';
        msg = 'vous devez chosir vos mot de passe'
        req.session.flash = {
            type: typeMsg,
            message: msg
        };
        res.render("home",{  flash: req.session.flash });
    }

}

