const express = require("express");
const {handleGetAllUsers, handlegetUserById, handleupdateUserById, handleCreateUserById, addBooks, getAllBooks, getBookById} = require("../controllers/user")

const router = express.Router();




router.get("/", handleGetAllUsers);

router.get("/:id",handlegetUserById);

router.patch("/:id", handleupdateUserById)



router.post("/addUser", handleCreateUserById);

router.post("/addBook", addBooks);

// router.get("/getBookById/:id", getBookById);

//router.get("/getAllBooks", getAllBooks);


router.get("/html/users", async (req, res)=>{

    const allDBUsers = await User.find({});
    const html = 
    `<ul>
        ${allDBUsers.map((user) => `<li>${user.firstname}- ${user.email}</li>`).join("")}

    </ul>`
    res.send(html)
    res.json(html);
});



router.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    if (!username || !password) {
      res.status(400).json({ message: "Bad Request!" });
    }
  
    const isUserExist = users.find(user => user.username === username);
    if (isUserExist) {
      res.status(200).json({ message: "User already exists!" });
    }
  
    users.push(req.body);
  
    return res.status(200).json({ message: "User added successfully!" });
});






module.exports = router;