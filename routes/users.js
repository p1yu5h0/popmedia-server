import express from "express";
import { signIn, signUp, editUser } from "../controllers/users.js";
const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/:id', editUser)

export default router;