"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var server = server_1.default.init(3000);
server.start(function () { return console.log("Server started"); });
//# sourceMappingURL=index.js.map