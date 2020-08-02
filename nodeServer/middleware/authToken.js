
const jwt=require("jsonwebtoken")


authenticateToken = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      
     const decoded = jwt.verify(token, require("../secret_keys").ACCESS_TOKEN_SECRET);
      
      next();
    } catch (error) {
      
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
  }

  module.exports=authenticateToken;