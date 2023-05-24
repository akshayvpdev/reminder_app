const jwt = require('jsonwebtoken')

const appMiddleware=(req,res,next)=>{
    try{
        token=req.headers["x-access-token"]
        result=jwt.verify(token,"secretsuperkey1234")
        req.currentUserEmail=result.currentUserEmail
        console.log("middleware is acting")
        console.log(res)
        next()
    }
    catch{
        res.status(400).json({
            status:false,
            message:"Invalid User... please Login",
            statusCode:400
        })
    }
}

module.exports={
    appMiddleware
}