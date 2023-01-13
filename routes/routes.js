import express from "express";

import { Router } from "express";
// Création du routeur
// const router = express.Router();
const router = Router();

import HomeController from "../controllers/home.js";
import  SignUpController from '../controllers/signUp.js'
import  LoginController from '../controllers/login.js'
import {authMiddleware, msg} from "../utils/utils.js";
import dashboard from '../controllers/dashboard.js'


// Déclaration des routes
router.get("/", HomeController);
router.post("/signup", SignUpController);
router.post("/login",LoginController );
router.get('/flash',msg)

router.get('/securedRoute/dashboard', authMiddleware,dashboard);

export default router;
