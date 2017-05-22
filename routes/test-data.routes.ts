import {Router, Request, Response, NextFunction} from 'express';
const data = require('./../data/testing.data.json');

export class TestDataRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.send(data);
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const testDataRoutes = new TestDataRouter();
testDataRoutes.init();

export default testDataRoutes.router;