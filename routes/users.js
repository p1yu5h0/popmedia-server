import express from "express";
import { signIn, signUp, editUser } from "../controllers/users.js";
const router = express.Router();

router.post('/:id', editUser)
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;