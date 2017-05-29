import * as express from 'express';
import * as bodyParser from 'body-parser';
import {join} from 'path';
import {IRest, IRestData} from './../../REST/index.interface';
// swagger definition
import {swaggerSpec} from '../../index';
import {json} from "body-parser";

export default class Server {

    private expressApp: express.Application;

    constructor(private port: number,
                private restData: IRest,
                private apiPath: string = 'api',
                private apiVersion: string = 'v1') {
        this.expressApp = express();

        this.init();
    }

    private init() {
        this.expressApp.set('port', this.port);
        this.initMiddleware();
        this.initRoutes();
    }


    public start() {
        this.expressApp.listen(this.port, () => {
            console.info(`Server listening on port ${this.port}`);
        });
    }

    private initMiddleware(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({extended: false}));
        this.expressApp.use('/api-docs', express.static(join(__dirname, '../../api-docs')));
    }

    private initRoutes(): void {
        this.expressApp.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.expressApp.get('/swagger.json', (req, res, next) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        });

        this.restData.paths.forEach((p: IRestData) => {
            this.addRoutes(p.method, p.path, p.controller);
        })

    }


    private addRoutes(method: string = 'post', route: string, handler: Function): void {
        let endpointPath = `/${this.apiPath}/${this.apiVersion}/${route}`;
        this.expressApp[method](`${endpointPath}`, handler);
    }
}