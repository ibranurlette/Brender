const jwt = require("jsonwebtoken");
const models = require("../models");
const Payment= models.payment;
const User = models.user;

// namabah payment
exports.create_peyment = async (req, res) => {
const {no_rek, prof_transfer, status} =req.body;
const token = req.header("Authorization").replace("Bearer ", "");
const user = jwt.verify(token, process.env.SECRET_KEY);

 try {
    const payment = await Payment.create(
    {
    	no_rek,
    	prof_transfer,
    	status,
      user_id:user.user_id
    	});
    const detail = await Payment.findOne({
        include: [
          {
            model: User,
            as: "use",
            attributes: [
              "breder",
              "addres",
              "phone"
            ]
          }
        ],
        attributes: { exclude: ["payment","createdAt","updatedAt"] },
        where: { id:payment.dataValues.id }
      })

    res.status(200).send({ message: "success", data: detail });
  } catch (err) {
    console.log(err);
  }
};

// update payment
exports.update_payment = async (req, res) => {
  const id = req.params.id;
  const {no_rek, prof_transfer, status} =req.body;
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user.level == "admin"){
      const update_payment = await Payment.update({
      no_rek,
      prof_transfer,
      status
      }, { where: { id } } );
      const detail_data = await Payment.findOne({
        include: [
          {
            model: User,
            as: "use",
            attributes: [
              "breder",
              "addres",
              "phone"
            ]
          }
        ],
        attributes: { exclude: ["user","createdAt","updatedAt"] },
        where: { id }
      })

      res.status(200).send({
        status: true,
        message: "Success to Updated Payment",
        data: detail_data
      })
    } else {
      res.status(200).send({
        status: false,
        message: "Only Admin to Update payment"
      });
    }
  } catch (err) {
    console.log(err);
  }
};



