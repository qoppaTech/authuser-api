

export class HandlerErrors {
    static async requiredField(field: String) {
            return {
                error: 400,
                type: "Client Error",
                message: `The field ${field} is required.`
            }
    }

    static async ValidationError(message: String) {
            return {
                error: 401,
                type: "Client Validation Error",
                message: `${message}`
            }
    }
}