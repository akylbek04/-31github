const Router = require("../framework/Router");
const controller = require("../src/user-controller");

// const { getUsers, createUsers } = controller;

const router = new Router();

router.get("/users", controller.getUsers);

router.post("/users", controller.createUsers);

module.exports = router;
