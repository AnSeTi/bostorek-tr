import express from "express";
import * as bookController from "../controllers/bookController.js";

const router = express.Router();

// router.get('/', bookController.getAllBooks);
// router.post('/', bookController.createABook);

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(bookController.createABook);

// router.get("/:id", bookController.getABook);
// router.put("/:id", bookController.updateABook);
// router.delete("/:id", bookController.deleteABook);
//Aşağı da ki şekilde zincirli routelar ayarlanabilir

router
  .route("/:id")
  .get(bookController.getABook)
  .put(bookController.updateABook)
  .delete(bookController.deleteABook);

export default router;

// "* as" ilgili js dosyasında ki tüm metodları getirir (sql sorgusu gibi)
//route ve controller dosyaları MVC şablonuna uymak amacıyla yapılmıştır
// view = frontend
// controller = controller.js işlemleri
// model= db de oluşturacağımız data yapısını bu modeller ile oluşturacağımız skimalar ile yapacağız
