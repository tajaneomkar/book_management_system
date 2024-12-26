const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json")
const mongoose = require("mongoose");
const { error } = require("console");
const userRouter = require("./routes/user")
const bookRouter = require("./routes/book")
const { connectMongoDB } = require("./connection");

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Add this to parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Add this for form submissions

// //Connection to Mongo DB: 
// mongoose.connect("mongodb://localhost:27017/testDB")
// .then(()=>console.log("Connection Created"))
// .catch(err => console.log('Mongo error', err))

connectMongoDB("mongodb://localhost:27017/testDB")


//************** */ //schema
// const userSchema = new mongoose.Schema({
//     firstname: {
//         type: String,
//         required: true
//     },
//     lastname: {
//         type: String,
//         required: false
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     title: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     },

// });
// const User = mongoose.model('user', userSchema)



//middleware- plugin for post data from postman
//Crud API implementation on localhost and postman
// app.use(express.urlencoded({ extended:false}));


// app.get("/api/users", async (req, res)=>{
//     const allDBUsers = await User.find({});

//     return res.json(allDBUsers)

// })


// app.get("/html/users", async (req, res)=>{

//     const allDBUsers = await User.find({});
//     const html = 
//     `<ul>
//         ${allDBUsers.map((user) => `<li>${user.firstname}- ${user.email}</li>`).join("")}

//     </ul>`
//     res.send(html)
//     res.json(html);
// })

// app.get("/api/users/:id", (req, res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user)

// })

// app.get("/users/name/:first_name", (req, res) => {
//     const firstName = req.params.first_name;
//     const user = users.find((user) => user.first_name.toLowerCase() === firstName.toLowerCase());

//     if (user) {
//         return res.json(user);
//     } else {
//         return res.status(404).json({ message: "User not found" });
//     }
// });

// app.get('/api/users/:id',async(req,res)=>{
//     const user = await User.findById(req.params.id);
//     if(!user) return res.status(202).json({error: "User not found"});
//     //const id = Number(req.params.id);
//    // const user = users.find((user) => user.id === id);
//     return res.json(user);

// })





// app.post("/api/myuser", (req, res)=>{
//     const body = req.body;
//     console.log("Body is", body)
//     users.push({...body, id: users.length+1});
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
//       return res.json({status: "creation pending "})


//     })

// })

// app.post("/api/addUsers", async (req, res) => {
//     const body = req.body;

//     // Validate incoming request
//     if (
//         !body ||
//         !body.first_name ||
//         !body.last_name ||
//         !body.email ||
//         !body.gender ||
//         !body.title
//     ) {
//         return res.status(400).json({ msg: "All fields are required" });
//     }

//     try {
//         // Create user in the database
//         const result = await User.create({
//             firstname: body.first_name,
//             lastname: body.last_name,
//             email: body.email,
//             gender: body.gender,
//             title: body.title,
//         });

//         console.log("Result:", result);
//         return res.status(201).json({ msg: "User created successfully", data: result });
//     } catch (error) {
//         console.error("Error creating user:", error);

//         // Handle duplicate email error
//         if (error.code === 11000) {
//             return res.status(400).json({ msg: "Email already exists" });
//         }

//         return res.status(500).json({ msg: "Internal Server Error" });
//     }
// });



//Routes:
app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);




app.listen(port, () => console.log("Server is running on port 3000") )
