import express from "express";
import handlebars from 'express-handlebars'
import {Server} from 'socket.io'



const productos = new ProductManager();

const app = express();
const server = app.listen(8081,()=>console.log("listening puerto 8081"))

