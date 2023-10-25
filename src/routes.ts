import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

router
.get('/SingUp', UserController.createUser)

export default router;