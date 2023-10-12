var jwt = require('jsonwebtoken');
const JWE_SECRET = "Sagarisagood$oy";

const fetchuser = (req, res, next) => {
    // get the usr from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({ error: "Please authenticate using a validn toekn" })
    }
    try {
        const data = jwt.verify(token, JWE_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token"})
    }
}
module.exports = fetchuser;