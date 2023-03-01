var jwt = require('jsonwebtoken');
const JWT_SECRET = "Nishant";


fetchserviceprovider = (req,res,next)=>{
    // Get the Customer from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please authenticate a valid token"})
    }
    try{
        const string = jwt.verify(token,JWT_SECRET);
        req.serviceprovider = string.serviceprovider;
        next();
    }
    catch (error){
        res.status(401).send({error:"Please authenticate a valid token"})

    }
}

module.exports = fetchserviceprovider