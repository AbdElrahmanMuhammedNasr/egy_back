const  jwt = require('jsonwebtoken')

const secret_key = "key";

exports.generateToken = (user)=>{

    const {name , phone , role,_id} = user
    const token = jwt.sign({
        _id,
        name,
        phone,
        role
        },secret_key,{expiresIn: '1h'})
    return token;
}

exports.isValidToken =(req, res, next)=>{
    const token = req.header.authorization.split('Bearer ')[1]
    if(token){
        jwt.verify(token, secret_key,(err, user)=>{
            if(err){
                return res.sendStatus(403)
            }else {
                req.user = user;
                return  true
            }
        })
    }
    next()
}
