import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

//all routes here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

// /users/2 -> can get 2 from req.params {id: 2}
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
