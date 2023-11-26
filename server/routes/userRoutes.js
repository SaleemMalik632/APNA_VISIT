const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users", userController.Signup);
router.post("/login", userController.Login);
router.get("/users", userController.getUser);


router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
