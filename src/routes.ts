import { Application } from 'express';
import hotelsRouter from './api/controllers/hotels/routes';

export default function routes(app: Application): void {
    app.use('/api/v1/hotels', hotelsRouter);
};