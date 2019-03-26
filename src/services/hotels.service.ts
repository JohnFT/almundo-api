import { IHotel } from "../Interfeces/IHotel";
import { Hotels } from "../mocks/hotels";
import { HotelModel } from "../models/hotel";

let hotels = Hotels;



/**
 * Hotels services
 */
class HotelsServices {


  /**
   * Get all hotels entity 
   * @returns all hotels entity
   */
  getAll(): HotelModel[] {
    return Hotels;
  }

  /**
   * Get hotel entity by id
   * @param id 
   * @returns by id hotel entity
   */
  getById(id: string): HotelModel {
    return hotels.find(hotel => hotel.id === id);
  }



  /**
   * Add hotel entity servies
   * @param hotel 
   * @returns add hotel entity
   */
  add(hotel: HotelModel): HotelModel {
    if (!hotel.id) {
      hotel.id = new Date().getTime().toString();
      hotels.push(hotel);
      return hotel;
    }

    let res = hotels.find(hotel => hotel.id === hotel.id);

    if (!res) {
      hotel.id = new Date().getTime().toString();
      hotels.push(hotel);
      return hotel;
    }

    res = hotel;

    return hotel;
  }


  /**
   * Remove hotel entity servies
   * @param hotel 
   * @returns remove hotel entity
   */
  remove(hotel: HotelModel): HotelModel {
   
    if (!hotel.id) {
      return null;
    }

    let res = Hotels.find(hotel => hotel.id === hotel.id);

    if (!res) {
      return hotel;
    }

    hotels = hotels.filter(hotel => hotel.id !== hotel.id);

    return hotel;
  }
}

export default new HotelsServices;