"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hotel = (function () {
    function Hotel(id, name, stars, price, image, amenities) {
        if (amenities === void 0) { amenities = []; }
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.price = price;
        this.image = image;
        this.amenities = amenities;
    }
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=hotel.js.map