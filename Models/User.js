/*
  Voici la structure d'un document Utilisateur sur lequel vous vous baserez pour faire le Schéma mongoose :

  {
    firstName  // type String, obligatoire
    lastName  // type String, obligatoire
    email  // type String, obligatoire
    password  // type String, obligatoire
  }

*/

import mongoose from "mongoose";
const { Schema, model } = mongoose;


const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const UserModel = model("users", userSchema);


// module.exports = User;
