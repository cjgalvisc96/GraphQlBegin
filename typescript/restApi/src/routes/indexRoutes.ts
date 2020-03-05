import { Request, Response, Router } from 'express';

class Routes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', (req, res) => res.send('Api: /api/v1/posts'));
    }
}

const indexRoutes = new Routes();


export default indexRoutes.router;