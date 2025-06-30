const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "http unauthorized , token not accepted" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("jwtToken", jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
console.log("is verified vaaline  ",isVerified)
    const userData = await User.findOne({email:isVerified.email}).select({
        password: 0,
    })
console.log("userData", userData);
req.user = userData;
req.token=token;
req.userId = userData._id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "unauthorised . Invalid token" });
  }
};

module.exports = authMiddleware;
