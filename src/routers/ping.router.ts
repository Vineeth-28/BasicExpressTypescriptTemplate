import { Express, Router } from "express";
import { pingHandler } from "../Controllers/ping.controller";

const pingRouter = Router();

pingRouter.get('/ping' ,pingHandler); //routing

export default pingRouter;
