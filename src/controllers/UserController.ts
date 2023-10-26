import { prismaClient } from "../database/PrismaClient";
import { Request, Response } from "express";
import { Validator } from "../validator/Validator";
import { HandlerErrors } from "../handler/Handler";

export class UserController {
    static async createUser( req: Request, res: Response ) {
        const {username, email, password} = req.body;

        if(!username) {
            return res.status(400).send(await HandlerErrors.requiredField("username"));
        } else if(!email) {
            return res.status(400).send(await HandlerErrors.requiredField("email"));
        } else if(!password) {
            return res.status(400).send(await HandlerErrors.requiredField("password"));
        }


        const result = await Validator.newUserValidator({username, email, password});
        if(result.error) {
            return res.status(401)
        }

    }
}