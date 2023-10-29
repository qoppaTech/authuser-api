

export class Handler {
    static requiredField(field: String) {
            return {
                identifier: 1,
                code: 400,
                type: "Client Error",
                message: `The field ${field} is required.`
            }
    }

    static AlreadyExist(field: String) {
        if(field === "username") {
            return {
                identifier: 2.1,
                code: 400,
                type: "Client Error",
                message: `The username ${field} already exist.`
            }
        } else if(field === "email") {
            return {
                identifier: 2.2,
                code: 400,
                type: "Client Error",
                message: `The email ${field} already exist.`
            }
        } else {
            return {
                identifier: 2.0,
                code: 400,
                type: "Client Error"
            }
        }
    }

    static ValidationError(message: String) {
            return {
                identifier: 3,
                code: 401,
                type: "Client Validation Error",
                message: `${message}`
            }
    }

    static ServerError() {
            return {
                identifier: 4,
                code: 500,
                type: "Server Response Error",
                message: "Sorry, the server was unable to respond."
            }
    }

    static UserNotFound(username: String) {
            return {
                identifier: 6,
                code: 400,
                type: "User Not Found",
                message: `${username} username was not found.`
            }
    }

    static NotAuthorized(arg?: String) {
        if(arg === "password") {
            return {
                identifier: 7.1,
                code: 401,
                type: "Not authorized request.",
                message: "Password is entered incorrectly"
            }   
        } else {
            return {
                identifier: 7.1,
                code: 401,
                type: "Not authorized request.",
                message: "Password is entered incorrectly"
            }
        }
    }

    static SuccessfulRequest(arg?: String, token?: String) {
        if(arg == "login") {
            return {
                identifier: 200.1,
                code: 200,
                type: "Request successful",
                message: "Logged with success!",
                token: token
                }
        } else {
            return {
                identifier: 200.0,
                code: 200,
                type: "Request successful"
            }
        }
    }
}