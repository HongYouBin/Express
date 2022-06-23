import * as express from "express";
import { Cat, CatType } from "./cats/cats_model";
import catsRouter from "./cats/cats_route";

const app: express.Express = express(); //app -> express의 instance

const port: number = 8000;

//logging middelware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middle");
  next();
});

//JSON middleware
app.use(express.json());

app.use(catsRouter);

//404 middleware
app.use((req, res, next) => {
  console.log("error");
  res.send({ error: "404 not found err" });
  //next();
});

app.listen(port, () => {
  //서버를 연다.
  console.log(`server is on... http://localhost:${port}/`);
});
