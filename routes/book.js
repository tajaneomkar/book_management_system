
const express = require("express");
const {getBookById, getAllBooks, getBookByIsbn, getBookByName, getBookAuther} = require("../controllers/user")

const router = express.Router();




router.get("/getBookById/:id", getBookById);

router.get("/getAllBooks", getAllBooks);

router.get("/getBookByIsbn/:isbn", getBookByIsbn);

router.get("/getBookByBookName/:book_Name", getBookByName);

router.get("/getBookByAuther/:authername", getBookAuther)





module.exports = router