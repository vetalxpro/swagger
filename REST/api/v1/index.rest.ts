import {IRestData} from './../../index.interface'
import {testController}from './controllers/test.controller';

/*app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});*/

export const paths: IRestData[] = [
    /**
     * @swagger
     * api/v1/hi:
     *   get:
     *     tags:
     *       - Hi
     *     description: yo message
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: test message
     */
    {
        description: 'all repository actions endpoint',
        method: 'get',
        path: `hi`,
        controller: function (req, res, next) {
            res.send('yo!')
        }
    },
    {
        description: 'test endpoint',
        method: 'get',
        path: `test`,
        controller: testController
    },
    {
        description: 'test endpoint',
        method: 'get',
        path: `test`,
        controller: testController
    }

];