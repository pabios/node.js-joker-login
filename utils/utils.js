import jwt, {verify} from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { AUTH_SECRET  } = process.env;


// MIDDLEWARES  VERIFICATION SI LE TOKEN EXISTE
export const authMiddleware = (req,res,next) =>{
    if(!req.session){
        return res.status(401).json({
            error: "Unauthorized: aucune session trouver"
        });
    }

    if(!req.session.token){
        return res.status(401).json({
            error: "Unauthorized: aucun token trouver"
        });
    }

    // on récupère le token stocké dans la session
    const token = req.session.token;

    try {
        const verif = jwt.verify(token, AUTH_SECRET);

        console.log(verif, 'is valid!');
        next();
    }
    catch (err) {
        console.log('Error verifying token …', err.message);
    }
}


// FLASH MESSAGE
export   const msg = (req, res) => {
    req.flash('flash_message', 'Je suis un flash message');
    res.redirect('/')
}
