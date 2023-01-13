import {connectToMongo} from "../Models/db.js";
import {UserModel} from "../Models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";


dotenv.config();
const { AUTH_SECRET  } = process.env;

export default async function login(req, res) {
    console.log('bienvenu login')
    connectToMongo().then(r => console.log(r));

    let { email, password } = req.body;

    console.log(email)
    console.log(password)


    // // create a sha-256 hasher
    const sha256Hasher = crypto.createHmac("sha256", AUTH_SECRET);

    // hash the string
    password = sha256Hasher.update(password).digest("hex")
    const user = await UserModel.findOne({ email : email,password: password });

    // const user = await UserModel.findOne({ email : email });

    console.log(user)
    let msg = '';
    if (user){

        const date = new Date();
        let userId = date.toDateString();

        const info ={
            userId: userId,
            email: email,
            role : 'Admin'
        }
        const token = jwt.sign(
            info, // informations utilisateur
            AUTH_SECRET, // valable en développement, il faudra fournir lors de la production une chaîne plus longue
            { expiresIn: '24h' }   // validité temps
        );

        // dd(session)
        // on la garde la session
        req.session.token = token;

        // on l'envois au client
        // res.json({ token });


        msg = ' go dashbord';
        // res.render("dashboard");
        res.redirect('securedRoute/dashboard')
    }else{
        msg = 'email ou mot de passe incorrete';
    }

    console.log(msg);
}
