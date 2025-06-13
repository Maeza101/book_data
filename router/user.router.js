const express = require(`express`);
const router = express.Router();
const { createNewUser, getUser, getOneUser, updateUser, deleteUser } = require(`../controller/user.controller`);
const { get } = require("mongoose");

router.route(`/newuser`).post(createNewUser);
router.route(`/viewalluser`).get(getUser);
router.route(`/getsingleuser/:id`).get(getOneUser);
router.route(`/userupdate/:id`).patch(updateUser);
router.route(`/removeUser/:userID`).delete(deleteUser);

module.exports = router;