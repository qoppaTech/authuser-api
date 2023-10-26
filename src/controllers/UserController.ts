import { prismaClient } from "../database/PrismaClient";
import { Request, Response } from "express";
import { Validator } from "../validator/Validator";
import { Handler } from "../handler/Handler";
import bcrypt from 'bcrypt';

export class UserController {
    static async createUser( req: Request, res: Response ) {
        const {username, email, password} = req.body;

        if(!username) {
            return res.status(400).send( Handler.requiredField("username") );
        } else if(!email) {
            return res.status(400).send( Handler.requiredField("email") );
        } else if(!password) {
            return res.status(400).send( Handler.requiredField("password") );
        }

        const result = await Validator.newUserValidator({username, email, password});

        if(result.error) {
            return res.status(401).send( Handler.ValidationError(result.error.message));
        }

        try{
             const encryptedPassword = await bcrypt.hash(password, 12);

             const user = await prismaClient.user.create({
                data: {
                    username, 
                    email,
                    password: encryptedPassword
                }
             })

             return res.status(200).send()
        } catch(err) {
            return res.status(500).send( Handler.ServerError() );
        }

    }
}