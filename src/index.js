import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";

class Server {
  constructor(port, app) {
    this.port = port;
    this.app = app;
  }

  configRouter() {
    this.app.use(cors());
    this.app.use(json());
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
