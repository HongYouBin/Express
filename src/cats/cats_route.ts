import * as express from "express";
import { Cat, CatType } from "./cats_model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllCat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats_service";
const router = Router(); //라우터 생성.. 라우터 모듈화

//******************** CRUD ********************
// READ 고양이 전체 데이터 조회
router.get("/cats", readAllCat);

//고양이 데이터 조회
router.get("/cats/:id", readCat);

// CREATE 새로운 고양이 추가 API
router.post("/cats", createCat);

// UPDATE 고양이 데이터 -> PUT
router.put("/cats/:id", updateCat);

// UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", updatePartialCat);

// DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

export default router;
