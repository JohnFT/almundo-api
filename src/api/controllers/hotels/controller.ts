import HotelsServices from "../../services/hotels.service";
import { Hotel } from "../../data/models/hotel";
import { Request, Response } from 'express';
/**
 * Hotel controller
 */

export class HotelController {


  /**
   * Gets all hotels entity
   * @param req
   * @param res
   */
  public getAll(req: Request, res: Response): void {
    const page = req.query.page;
    const size = req.query.size;
    const stars = req.query.stars;
    const name = req.query.name;
    try {
      res.json(HotelsServices.getAll(page, size, stars, name));
    } catch (err) {
      res.status
      console.error("error", err);
    }
  }

  /**
   * Get hotel entity by id
   * @param req
   * @param res
   */

  public getById(req: Request, res: Response): void {
    const resutl = HotelsServices.getById(req.params.id);
    if (resutl) res.json(resutl);
    else res.status(404).end();
  }

  /**
   * Adds hotel entity controller
   * @param req
   * @param res
   */
  public add(req: Request, res: Response): void {
    const result = HotelsServices.add(req.body.hotel);
    res
      .status(201)
      .json(result);

  }

  /**
   * Removes hotel entity controller
   * @param req
   * @param res
   */
  public remove(req: Request, res: Response): void {
    const resutl = HotelsServices.remove(req.params.id);
    if (resutl) res.json(resutl);
    else res.status(404).end();
  }
}

export default new HotelController();
