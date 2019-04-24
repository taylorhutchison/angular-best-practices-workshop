"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpClient_1 = require("./HttpClient");
var client = new HttpClient_1.HttpClient();
client
    .get("https://www.google.com/");
