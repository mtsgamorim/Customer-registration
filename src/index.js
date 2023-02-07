import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import userRouter from "./routes/userRouter";

class Server {
  constructor(port, app) {
    this.port = port;
    this.app = app;
  }

  configRouter() {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(userRouter);
  }

  listen() {
    this.app.listen(this.port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(chalk.bold.green(`Servidor rodando na porta ${this.port}`));
      }
    });
  }
}

let server = new Server(5000, express());

server.configRouter();
server.listen();
