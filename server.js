import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import route from "./routes/routes.js";


import session from 'express-session';
import flash from "connect-flash";



// ==========
// App initialization
// ==========

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "pug");
app.locals.pretty = (NODE_ENV !== 'production'); // Indente correctement le HTML envoyé au client (utile en dev, mais inutile en production)

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));

// Middleware pour traiter les données POST au format "x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }));

// SESSION
app.use(session({
  name: 'simple',
  secret: 'simple',
  resave: false,
  saveUninitialized: true
}));

// "flash" doit impérativement être défini APRÈS le middleware de session
app.use(flash());

// app.use((req, res, next) => {
//   res.locals.flash_message = req.flash("success_message");
//   res.locals.messages = [];
//   next();
// });

// ==========
// App routers
// ==========

app.use("/", route);

// ==========
// App start
// ==========

app.listen(APP_PORT, () => {
  console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});
