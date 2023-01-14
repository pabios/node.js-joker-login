
import mongoose from "mongoose";
const { Schema, model } = mongoose;


const ContactSchema = new Schema({
    site: { type: String, required: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true,unique: false },
    message: { type: String, required: true }
});

export const ContactModel = model("contacts", ContactSchema);
