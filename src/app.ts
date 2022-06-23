import * as express from "express";
import { Cat, CatType } from "./cats/cats_model";
import catsRouter from "./cats/cats_route";

const app: express.Express = express(); //app -> express의 instance

const port: number = 8000;

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    //route middleware
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //logging middelware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is middle");
      next();
    });

    //JSON middleware
    this.app.use(express.json());

    this.setRoute();

    //404 middleware
    this.app.use((req, res, next) => {
      console.log("error");
      res.send({ error: "404 not found err" });
      //next();
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on ...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();

/*
app.listen(port, () => {
  //서버를 연다.
  console.log(`server is on... http://localhost:${port}/`);
});
*/
