import { prismaClient } from "../database/PrismaClient";
import { Request, Response } from "express";
import { Validator } from "../validator/Validator";
import { HandlerErrors } from "../handler/Handler";

export class UserController {
    static async createUser( req: Request, res: Response ) {
        const {username, email, password} = req.body;

        if(!username) {
            return res.status(400).send(HandlerErrors.requiredField("username"));
        } else if(!email) {
            return res.status(400).send(HandlerErrors.requiredField("email"));
        } else if(!password) {
            return res.status(400).send(HandlerErrors.requiredField("password"));
        }

        const result = Validator.newUserValidator({username, email, password});
        console.log(result)

    }
}