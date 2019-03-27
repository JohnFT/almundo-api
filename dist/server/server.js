"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = __importDefault(require("../routes"));
var swaggerUi = __importStar(require("swagger-ui-express"));
var cors_1 = __importDefault(require("cors"));
var bodyParser = require("body-parser");
var path_1 = __importDefault(require("path"));
var Server = (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
        var root = path_1.default.normalize(__dirname + '/..');
        this.app.use('/assets', express.static(root + "/public"));
        this.app.use(cors_1.default());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        routes_1.default(this.app);
        try {
            var swaggerDocumnet = require("../../swagger.json");
            this.app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumnet));
        }
        catch (err) {
            console.log(err);
        }
    }
    Server.init = function (port) {
        return new Server(port);
    };
    Server.prototype.start = function (callback) {
        this.app.listen(process.env.PORT || this.port, callback());
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map