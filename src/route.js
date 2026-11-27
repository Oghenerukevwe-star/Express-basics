import express from "express";
import * as bookController from "./controller";

const router = express.Router();

router.get("/api/books", bookController.getBooks);
router.get("/api/books", bookController.getBookById);

