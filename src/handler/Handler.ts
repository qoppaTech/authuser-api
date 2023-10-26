

export class Handler {
    static requiredField(field: String) {
            return {
                error: 400,
                type: "Client Error",
                message: `The field ${field} is required.`
            }
    }

    static ValidationError(message: String) {
            return {
                error: 401,
                type: "Client Validation Error",
                message: `${message}`
            }
    }

    static ServerError() {
            return {
                error: 500,
                type: "Server Response Error",
                message: "Sorry, the server was unable to respond."
            }
    }
}