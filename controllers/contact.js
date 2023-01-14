import {connectToMongo} from "../Models/db.js";
import {UserModel} from "../Models/User.js";
import {ContactModel} from "../Models/Contact.js";

export default async function contact(req, res) {
    connectToMongo().then(r => r);

    let {site, name, mobile, email,subject, message} = req.body;

    console.log(`site ${site}`)
    console.log(`name ${name}`)
    console.log(`mobile ${mobile}`)
    console.log(`email ${email}`)
    console.log(`message ${message}`)

    await ContactModel.insertMany({site,name,subject, mobile, email, message});
    // res.render("/xyz");
    res.json("success")

}
