import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { UserModel } from "./schemas";
import { UserController } from "./controllers";

const server = express();
server.use(
    express.urlencoded({
        extended: true,
    })
);
server.use(express.json());

const User = new UserController();

mongoose.connect("mongodb://localhost:27017/chat", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

server.get("/user/:id", User.get);
server.get("/user/me", User.getMe);
server.post("/user/create", User.create);
server.delete("/user/:id", User.delete);

server.listen(3001, () => {
    console.log("Server listening on port 3001!");
});
