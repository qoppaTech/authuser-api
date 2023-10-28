<h1 align="center"> 🔐 authuser-api </h1>

RESTFUL API who manange the SingUp and LogIn system.
The **authuser-api** uses:
* Typescript
* NodeJS
* MySQL
* PrismaORM

## 💻 Development Enviroment

After installing the project, in the source directory:
```sh
npm install
touch .env
```

In the *.env* file insert:
```
PORT=3000

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/qoppa_login?schema=public"
```

Replace the marked fields to the respective information.

We need to create the MySQL database, so write:
```sh
yarn prisma migrate dev
```

Now, you can start the project! 
Use: 
```sh 
yarn start:dev
```
## HTTP Requests

Now, after started the server, we need to create our first HTTP request.

You can send POST requests to the /SingUp route, for that, is required to send a JSON in the body of the request that contains one *username*, *email* and *password*.

To LogIn, use the /LogIn route and similar as done previously, is required to send a JSON with *username* and *password* of the account in a POST request.

## Extra
API Developed by QoppaTech 

  *Developer: Marzeero*
  *ISC License*
  # QoppaTech - 2023 © Todos os direitos reservados.
  





