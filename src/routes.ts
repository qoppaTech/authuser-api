import { UserController } from "./controllers/UserController";
import { Router, Request, Response } from "express";

const router = Router();

router
.get("/SingUp", UserController.createUser)
.get("/", (req: Request, res: Response) => res.status(200).send("Qoppa Tech"));

export default router;