import { IHotel } from "../data/Interfeces/IHotel";
import { Hotels } from "../data/mocks/hotels";
import { Hotel } from "../data/models/hotel";

let hotels = Hotels;



/**
 * Hotels services
 */
class HotelsServices {


  /**
   * Get all hotels entity 
   * @returns all hotels entity
   */
  public getAll(page: number,
    size: number, stars: string, name: string): Hotel[] {
    let filterhotels = hotels;


    if (stars)
      filterhotels = filterhotels.filter(hotel => stars.split(',').indexOf(hotel.stars.toString()) > -1);

    if (name)
      filterhotels = filterhotels.filter(hotel => hotel.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1);

    if (!size)
      return filterhotels;

    return this.paginator(page, size, filterhotels);
  }

  /**
   * Get hotel entity by id
   * @param id 
   * @returns by id hotel entity
   */
  public getById(id: string): Hotel {
    return hotels.find(hotel => hotel.id === id);
  }



  /**
   * Add hotel entity servies
   * @param hotel 
   * @returns add hotel entity
   */
  public add(hotel: Hotel): Hotel {
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
  remove(id: string): Hotel {

    if (!id) {
      return null;
    }

    let res = Hotels.find(hotel => hotel.id === id);

    if (!res) {
      return null;
    }

    hotels = hotels.filter(hotel => hotel.id !== hotel.id);

    return res;
  }

  private paginator(page: number, size: number, array: Hotel[]): Hotel[] {
    const pages = Math.ceil(array.length / size);

    if (page > pages) {
      return [];
    }

    page = page > pages ? pages : !page ? 1 : page;
    const index = size * page - size;
    return array.filter((x, i) => i >= index && i < (index * 2 || size));
  }
}

export default new HotelsServices;