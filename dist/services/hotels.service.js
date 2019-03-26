"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotels_1 = require("../mocks/hotels");
var hotels = hotels_1.Hotels;
var HotelsServices = (function () {
    function HotelsServices() {
    }
    HotelsServices.prototype.getAll = function () {
        return hotels_1.Hotels;
    };
    HotelsServices.prototype.getById = function (id) {
        return hotels.find(function (hotel) { return hotel.id === id; });
    };
    HotelsServices.prototype.add = function (hotel) {
        if (!hotel.id) {
            hotel.id = new Date().getTime().toString();
            hotels.push(hotel);
            return hotel;
        }
        var res = hotels.find(function (hotel) { return hotel.id === hotel.id; });
        if (!res) {
            hotel.id = new Date().getTime().toString();
            hotels.push(hotel);
            return hotel;
        }
        res = hotel;
        return hotel;
    };
    HotelsServices.prototype.remove = function (hotel) {
        if (!hotel.id) {
            return null;
        }
        var res = hotels_1.Hotels.find(function (hotel) { return hotel.id === hotel.id; });
        if (!res) {
            return hotel;
        }
        hotels = hotels.filter(function (hotel) { return hotel.id !== hotel.id; });
        return hotel;
    };
    return HotelsServices;
}());
exports.default = new HotelsServices;
//# sourceMappingURL=hotels.service.js.map