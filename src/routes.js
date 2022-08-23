import { application, response, Router } from "express";
import * as MessageController from "./controllers/message.js";

const routes = Router();

routes.get('/', (request, response) => {
    response.send("Api tech Academy");
});

routes.post('/message', MessageController.message);
export default routes;