import * as express from "express";
import { Cat, CatType } from "./appModel";

const app: express.Express = express(); //app -> express의 instance

const port: number = 8000;

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middle");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  console.log("error");
  res.send({ error: "404 not found err" });
  //next();
});

app.listen(port, () => {
  //서버를 연다.
  console.log(`server is on... http://localhost:${port}/`);
});
