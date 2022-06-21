import * as express from "express";
const app: express.Express = express(); //app -> express의 instance

const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send("Hello World!!!!!!!!");
});

app.listen(port, () => {
  //서버를 연다.
  console.log(`Example app listening at http://localhost:${port}/`);
});
