const jwt = require("jsonwebtoken");
const models = require("../models");
const Pet = models.pet;
const User = models.user;
const Spesies = models.spesies;


// untuk lihat semua data
exports.show_pet = async (req, res) => {

  try {
    const { id } = req.params;
    const pet = await Pet.findAll({
      include: [
        {
          model: User,
          as: "use",
          attributes: ["breder", "addres", "phone"]
        },
         {
          model: Spesies,
          as: "spes",
          attributes: ["name"]
        }
      ],
      attributes: { exclude: ["user","spesies", "createdAt", "updatedAt"] }
    });
    res.send(pet);
  } catch (err) {
    console.log(err);
  }
};

// untuk nambah data
exports.create_pet = async (req, res) => {
const {name, gender, age, about_pet, photo} =req.body;
const spesies = req.body.spesies.id;
const user = req.body.user.id;
 try {
    const pet = await Pet.create(
    {
    	name,
    	gender,
    	spesies,
    	age,
    	user,
    	about_pet,
    	photo
    	});
	    const id = pet.id;
	    const data = await Pet.findOne({
	    include: [
	        {
	          model: User,
	          as: "use",
	          attributes: ["id","breder", "addres", "phone"]
	        },
	        {
	          model: Spesies,
	          as: "spes",
	          attributes: ["id", "name"]
	        }
	      ],

	      attributes: { exclude: ["pet", "createdAt", "updatedAt"] }
	       },
	       {where: {id} }
	       );
    res.status(200).send({ message: "success", data: pet });
  } catch (err) {
    console.log(err);
  }
};

exports.update_pet = async (req, res) => {
const {name, gender, age, about_pet, photo} =req.body;
const spesies = req.body.spesies.id;
const user = req.body.user.id;

  try {
    const id = req.params.id;

    const pet = await Pet.update(  {
    	name, gender, spesies, age, user, about_pet, photo
    	}, { where: { id } });
  
    if (pet.length > 0 && pet[0]) {
      const data = await Pet.findOne({
      where: {id},
      include: [
          {
            model: User,
            as: "use",
            attributes: ["id","breder", "addres", "phone"]
          },
          {
            model: Spesies,
            as: "spes",
            attributes: ["id", "name"]
          }
        ],

        attributes: { exclude: ["pet","users", "spesies", "createdAt", "updatedAt"] }
         }
         );

      res.status(200).send({ message: "success", data });
    } else {
      res.status(404).send({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete_pet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.destroy({ where: { id } });
    if (pet) {
      res.status(200).send({ message: "success", data: pet });
    } else {
      const data = await Pet.findAll();
      res.status(404).send({ message: "success", data });
    }
  } catch (err) {
    console.log(err);
  }
};

// detail data
exports.detail_pet = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);
     const id = req.user;
  try {
    const data = await Pet.findAll({
       where: {id},
      include: [
        {
          model: User,
          as: "use",
          attributes: ["breder", "addres", "phone"]
        },
         {
          model: Spesies,
          as: "spes",
          attributes: ["name"]
        }
      ],
      attributes: { exclude: ["pet","spesies","user", "createdAt", "updatedAt"] }
    });
    res.status(200).send({ message: "success to find data", data: data });
  } catch (err) {
    console.log(err);
  }
};

