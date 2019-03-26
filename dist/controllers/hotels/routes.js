"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./controller"));
var router = express_1.Router();
router.get("/", controller_1.default.getAll);
router.get("/:id", controller_1.default.getById);
router.post("/", controller_1.default.add);
router.delete("/", controller_1.default.remove);
exports.default = router;
//# sourceMappingURL=routes.js.map