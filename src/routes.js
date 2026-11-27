import express from "express";
import * as bookController from "./controller.js";

const router = express.Router();

router.post("", bookController.createBook);
router.get("/:id", bookController.getBookById);
router.get("", bookController.getBooks);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;
