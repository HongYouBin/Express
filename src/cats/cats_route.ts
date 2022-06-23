import * as express from "express";
import { Cat, CatType } from "./cats_model";
import { Router } from "express";

const router = Router(); //라우터 생성.. 라우터 모듈화

//******************** CRUD ********************
// READ 고양이 전체 데이터 조회
router.get("/cats", (req, res) => {
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
router.get("/cats/:id", (req, res) => {
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
router.post("/cats", (req, res) => {
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

export default router;
