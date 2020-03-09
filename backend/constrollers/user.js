const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.detail_user = async (req, res) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);
     const id = req.user;
  try {
    const data = await User.findOne({
      where: {id},
      attributes: { exclude: ["user","id","level","password","createdAt", "updatedAt"] }

       }
      );
    res.status(200).send( {message: "success to find data", data});
  } catch (err) {
    console.log(err);
  }
};

exports.update_user = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;
    const user = await User.update(req.body, { where: { id } });
    if (user.length > 0 && user[0]) {
      const data = await User.findOne({
        where: {id},
        attributes: { exclude: ["user","id","level","password","email","createdAt", "updatedAt"] }

         });
      res.status(200).send({ message: "success data berhasil di update", data });
    } else {
      res.status(404).send({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.delete_user = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });
    // res.status(200).send({ message: "success", data: todo });
    if (user) {
      res.status(200).send({ message: "success delete data", data: user });
    } else {
      const data = await User.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};

