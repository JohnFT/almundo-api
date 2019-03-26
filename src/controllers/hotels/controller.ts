import { Request, Response } from "express";
import HotelsServices from "../../services/hotels.service";
import { Controller, Route, Get, Post, BodyProp, Delete, SuccessResponse, Tags } from "tsoa";
import { HotelModel } from "../../models/hotel";

/**
 * Hotel controller
 */
@Route("/hotels")
export class HotelController extends Controller {

  
  /**
   * Gets all hotels entity
   * @param req
   * @param res
   */
  @Get()
  public async getAll(): Promise<HotelModel[]> {
    try {
      return HotelsServices.getAll();
    } catch (err) {
      this.setStatus(500);
      console.error("error", err);
    }
  }

  /**
   * Get hotel entity by id
   * @param req
   * @param res
   */
  @Get("/{id}")
  public async getById(id: string): Promise<HotelModel> {
    const resutl = HotelsServices.getById(id);
    if (resutl) return resutl;
    this.setStatus(402);
  }

  /**
   * Adds hotel entity controller
   * @param req
   * @param res
   */
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async add(@BodyProp() hotel: HotelModel): Promise<HotelModel> {
    HotelsServices.add(hotel);
    this.setStatus(201); // set return status 201
    return;
  }

  /**
   * Removes hotel entity controller
   * @param req
   * @param res
   */
  @Delete("/{id}")
  public async remove(id: string): Promise<HotelModel> {
    const resutl = HotelsServices.getById(id);
    if (resutl) return resutl;
    this.setStatus(402);
  }
}

export default new HotelController();
