"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_conf_1 = __importDefault(require("./database_conf"));
var auth_service_1 = require("./auth/auth-service");
var app = express_1.default();
app.use(express_1.default.json());
app.use("/auth", auth_service_1.authRoute());
database_conf_1.default().then(function () {
    console.log("MongoDB connected");
    app.listen(3000, function () { return console.log("connected"); });
});
