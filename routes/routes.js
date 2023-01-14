import express from "express";

import { Router } from "express";
// Création du routeur
// const router = express.Router();
const router = Router();

import HomeController from "../controllers/home.js";
import  SignUpController from '../controllers/signUp.js'
import  LoginController from '../controllers/login.js'
import {authMiddleware} from "../utils/utils.js";
import dashboard from '../controllers/dashboard.js'
import ContactController from '../controllers/contact.js'


// Déclaration des routes
// GET
router.get("/", HomeController);
router.get('/securedRoute/dashboard', authMiddleware,dashboard);

// POST
router.post("/signup", SignUpController);
router.post("/login",LoginController );
router.post("/contact",ContactController );

export default router;
