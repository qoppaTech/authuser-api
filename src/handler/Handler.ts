

export class Handler {
    static requiredField(field: String) {
            return {
                code: 400,
                type: "Client Error",
                message: `The field ${field} is required.`
            }
    }

    static AlreadyExist(field: String) {
        if(field === "username") {
            return {
                code: 400,
                type: "Client Error",
                message: `The username ${field} already exist.`
            }
        } else if(field === "email") {
            return {
                code: 400,
                type: "Client Error",
                message: `The email ${field} already exist.`
            }
        }
    }

    static ValidationError(message: String) {
            return {
                code: 401,
                type: "Client Validation Error",
                message: `${message}`
            }
    }

    static ServerError() {
            return {
                code: 500,
                type: "Server Response Error",
                message: "Sorry, the server was unable to respond."
            }
    }

    static SuccessfulRequest() {
            return {
                code: 200,
                type: "Request successful"
            }
    }
}