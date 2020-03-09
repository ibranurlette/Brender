const express = require("express");
const router = express.Router();
// auth conttrolers/midlleware
const { login, register } = require("../constrollers/auth");
const { auth, authPet } = require("../midleware/auth");
// controlers
const {create_spesies, getAll_spesies} = require("../constrollers/spesies");
const {create_pet, show_pet, update_pet, delete_pet, detail_pet} = require("../constrollers/pet");
const {detail_user, update_user, delete_user} = require("../constrollers/user");
const {create_peyment, update_payment} = require("../constrollers/payment");
const {getMatch, createMatch, updateMatch} = require("../constrollers/match");


router.get("/", (req, res) => {
  res.send("<strong>ibra</strong>");
});

// route auth
router.post("/login", login);
router.post("/register", register);
// route spesies
router.post("/spesies", create_spesies);
router.get("/spesies", getAll_spesies);
// raute pet
router.post("/pet", auth, create_pet);
router.get("/pet", show_pet);
router.put("/pet/:id", auth, update_pet);
router.delete("/pet/:id", auth, delete_pet);
router.get("/pet", auth, detail_pet);

// route user
router.get("/user", auth, detail_user);
router.put("/user/:id", auth, update_user);
router.delete("/user/:id", auth, delete_user);

// route payments
router.post("/payment", auth, create_peyment);
router.put("/payment/:id", update_payment);

// match hampir benar
// router.get("/match", auth, MatchController.check_match);
// router.post("/match", auth, MatchController.add_match);
// router.put("/match/:id", auth, MatchController.update_match);
// router.get("/matches", auth, MatchController.detail_match);

// match yang benar
router.get('/match', getMatch);
router.post('/match', createMatch);
router.put('/match/:id', updateMatch);

module.exports = router;