const User = require("../models/user");
const Book = require("../models/books");

async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});

    return res.json(allDBUsers)

}


async function handlegetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(202).json({ error: "User not found" });
    //const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(user);
}

async function handleupdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastname: "Changed" });
    return res.json({ Status: "User updated" });
}


async function handleCreateUserById(req, res) {
    const body = req.body;

    // Validate incoming request
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.title
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Create user in the database
        const result = await User.create({
            firstname: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            title: body.title,
        });

        console.log("Result:", result);
        return res.status(200).json({ msg: "User created successfully", data: result });
    } catch (error) {
        console.error("Error creating user:", error);

        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        return res.status(500).json({ msg: "Internal Server Error" });
    }

}


async function addBooks(req, res) {
    const body = req.body;

    // Validate incoming request
    if (
        !body ||
        !body.book_name ||
        !body.auther_name ||
        !body.title ||
        !body.isbn |
        !body.review
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Create user in the database
        const result = await Book.create({
            bookname: body.book_name,
            authername: body.auther_name,
            title: body.title,
            isbn: body.isbn,
            review: body.review,
        });

        console.log("Result:", result);
        return res.status(200).json({ msg: "Book Added successfully", data: result });
    } catch (error) {
        console.error("Error creating user:", error);

        // Handle duplicate email error
        if (error.code === 11000) {
            return res.status(200).json({ msg: "User Successfully Log-IN" });
        }

        return res.status(500).json({ msg: "Internal Server Error" });
    }

}

async function getBookById(req, res) {
    const user = await Book.findById(req.params.id);
    if (!user) return res.status(202).json({ error: "Book not found" });
    //const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(user);
}

async function getBookByIsbn(req, res) {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) return res.status(200).json({ error: "Book not found" });
    //const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(book);
}

async function getBookByName(req, res) {
    const book = await Book.findOne({ bookname: req.params.book_Name });
    if (!book) return res.status(200).json({ Message: "Login Successfully" });
    //const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(book);
}

async function getBookAuther(req, res) {
    const book = await Book.findOne({ authername: req.params.authername });
    if (!book) return res.status(200).json({ Message: "Login Successfully" });
    //const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    return res.json(book);
}


async function getAllBooks(req, res) {
    const allDBBooks = await Book.find({});

    return res.json(allDBBooks)

}

module.exports = {
    handleGetAllUsers,
    handlegetUserById,
    handleupdateUserById,
    handleCreateUserById,
    addBooks,
    getAllBooks,
    getBookById,
    getBookByIsbn,
    getBookByName,
    getBookAuther
}