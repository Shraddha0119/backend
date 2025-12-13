import express from "express";
import dotenv from "dotenv";
// import {login,signup} from "./controllers/user_controller.js";
import userRoute from "./routes/user-raouts.js";

dotenv.config();

const app = express();




app.get("/", (req, res) => {
    res.send("hello");
});


// user raotes//
// app.get("/login",login);
// app.get("/sighnup",signup);

app.use("/",userRoute)


let PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});


// mongodb+srv://<db_username>:<db_password>@backend.3obnrqi.mongodb.net/?appName=backend

// mongodb://localhost:27017