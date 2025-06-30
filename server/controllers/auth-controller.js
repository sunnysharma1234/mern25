const User = require("../models/user-model");

const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("This is the home page. thorug controller");
  } catch (err) {
    res.status(500).send("Internal server error.");
  }
};

const register = async (req, res) => {
  // console.log(req.body);
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists.",
        // error: "User already exists."
      });
    }
    // const saltRound   = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      msg: "registered successfully",
      token: await userCreated.generateToken(),

      userId: userCreated._id.toString(),

      // data: req.body
    });
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).json({
    //   message: "Internal server error.",
    //   // error: err.message
    // });
  }
};

// loginresponse

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({
        message: "User not found.",
        // error: "User not found."
      });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      return res.status(200).json({
        msg: "login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({
        message: "Invalid credentials.",
        // error: "Invalid credentials."
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
    // res.status(500).json({
    //     message: "Internal server error."
    //     // error: err.message
    //   });
  }
};

// user data - user logic

const user = async (req, res) => {
  try {
    const userData =  req.user;
    console.log(userData);
    return res.status(200).json({
      userData,
    });
  } catch (error) {
    connsole.log("error from user userlogic route", error);
  }
};

module.exports = { home, register, login, user };
