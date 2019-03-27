"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hotels_1 = require("../data/mocks/hotels");
var hotels = hotels_1.Hotels;
var HotelsServices = (function () {
    function HotelsServices() {
    }
    HotelsServices.prototype.getAll = function (page, size, stars, name) {
        var filterhotels = hotels;
        if (stars)
            filterhotels = filterhotels.filter(function (hotel) { return stars.split(',').indexOf(hotel.stars.toString()) > -1; });
        if (name)
            filterhotels = filterhotels.filter(function (hotel) { return hotel.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1; });
        if (!size)
            return filterhotels;
        return this.paginator(page, size, filterhotels);
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
    HotelsServices.prototype.remove = function (id) {
        if (!id) {
            return null;
        }
        var res = hotels_1.Hotels.find(function (hotel) { return hotel.id === id; });
        if (!res) {
            return null;
        }
        hotels = hotels.filter(function (hotel) { return hotel.id !== hotel.id; });
        return res;
    };
    HotelsServices.prototype.paginator = function (page, size, array) {
        var pages = Math.ceil(array.length / size);
        if (page > pages) {
            return [];
        }
        page = page > pages ? pages : !page ? 1 : page;
        var index = size * page - size;
        return array.filter(function (x, i) { return i >= index && i < (index * 2 || size); });
    };
    return HotelsServices;
}());
exports.default = new HotelsServices;
//# sourceMappingURL=hotels.service.js.map