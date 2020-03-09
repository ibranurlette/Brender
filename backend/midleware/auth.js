const jwt = require('jsonwebtoken');
const models = require('../models');
const User = models.user;
const Pet = models.pet;

exports.auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id: data.user_id } });
    if (!user) {
      throw new Error();
    }
    req.user = user.id;
    // req.user - data.user_id;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

exports.authPet = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const pet = await Pet.findOne({ where: { id: data.pet_id } });
    if (!pet) {
      throw new Error();
    }
    req.pet = pet.id;
    // req.user - data.user_id;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

exports.auth_admin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
      const token = jwt.sign(
        { user_id: user.id, level: "admin" },
        process.env.SECRET_KEY
      );
      res
        .status(200)
        .send({ email, token, status: true, message: "Login Success" });
    } else {
      res.status(401).send({ status: false, message: "Invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
};

