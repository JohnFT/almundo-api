"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hotels_service_1 = __importDefault(require("../../services/hotels.service"));
var HotelController = (function () {
    function HotelController() {
    }
    HotelController.prototype.getAll = function (req, res) {
        var page = req.query.page;
        var size = req.query.size;
        var stars = req.query.stars;
        var name = req.query.name;
        try {
            res.json(hotels_service_1.default.getAll(page, size, stars, name));
        }
        catch (err) {
            res.status;
            console.error("error", err);
        }
    };
    HotelController.prototype.getById = function (req, res) {
        var resutl = hotels_service_1.default.getById(req.params.id);
        if (resutl)
            res.json(resutl);
        else
            res.status(404).end();
    };
    HotelController.prototype.add = function (req, res) {
        var result = hotels_service_1.default.add(req.body.hotel);
        res
            .status(201)
            .json(result);
    };
    HotelController.prototype.remove = function (req, res) {
        var resutl = hotels_service_1.default.remove(req.params.id);
        if (resutl)
            res.json(resutl);
        else
            res.status(404).end();
    };
    return HotelController;
}());
exports.HotelController = HotelController;
exports.default = new HotelController();
//# sourceMappingURL=controller.js.map