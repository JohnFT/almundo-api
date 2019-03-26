"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HotelModel = (function () {
    function HotelModel(id, name, stars, price, image, amenities) {
        if (amenities === void 0) { amenities = []; }
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.price = price;
        this.image = image;
        this.amenities = amenities;
    }
    return HotelModel;
}());
exports.HotelModel = HotelModel;
//# sourceMappingURL=hotel.js.map