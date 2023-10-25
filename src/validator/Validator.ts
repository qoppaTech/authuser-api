import Joi from 'joi';

export class Validator {
    static async newUserValidator({username, email, password}) {
        const schema = Joi.object({
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(15)
                .required(),
            
            email: Joi.string()
                .email()
                .required(),
            
            password: Joi.string()
                .min(8)
                .max(32)
                .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*\\W).+$'))
                .required(),
        })

        const result = schema.validate({username, email, password});
        return result;
    }   
}

