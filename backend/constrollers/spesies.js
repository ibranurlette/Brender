const models = require("../models");
const Spesies = models.spesies;
const User = models.user;

// to create data spesies
exports.create_spesies = async (req, res) => {
  const {name} = req.body;
  try {
    const check = await Spesies.findOne({
      where: {name},
        attributes: { exclude: ["spesies","createdAt", "updatedAt"] }
         });
    if(check){
      res.status(200).send({ message: "data sudah ada" });
    }else{
    const spesies = await Spesies.create(req.body);
    res.status(200).send({ message: "success created new spesies", data: {id: spesies.id, name} });
    }
  } catch (err) {
    console.log(err);
  }
};

// to getAll data spesies
exports.getAll_spesies = async (req, res) => {
  try {
    const data = await Spesies.findAll({
        attributes: { exclude: ["spesies","createdAt", "updatedAt"] }
         });
    res.send({ message: "success GetAll data spesies", data});
  } catch (err) {
    console.log(err);
  }
};
