import { UserController } from "./controllers/UserController";
import { Router, Request, Response } from "express";

const router = Router();

router
.post("/SingUp", UserController.createUser)
.get("/LogIn", UserController.LogIn)
.get("/", (req: Request, res: Response) => res.status(200).send("<p><h1>Welcome!</h1></p> <hr> <h2>Qoppa Tech </h2>"))
.get("*", (req: Request, res: Response) => res.status(200).send("<h1>ERROR 404 -> PAGE NOT FOUND</h1><hr> <h2>Qoppa Tech </h2>"));

export default router;