import * as express from "express";
import { Cat, CatType } from "./appModel";

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

//******************** CRUD ********************
// READ 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    //throw new Error('DB connect err');
    res.send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

//고양이 데이터 조회
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE 새로운 고양이 추가 API
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    Cat.push(data);
    res.status(200).send({
      succes: true,
      data: { data },
    });
  } catch (error: any) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

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
