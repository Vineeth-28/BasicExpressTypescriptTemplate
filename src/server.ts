import express from 'express';
import { serverConfig } from './Config';
import { pingHandler } from './Controllers/ping.controller';
import pingRouter from './routers/ping.router';
const app = express();


//Registering all the routers and their coressponding routes with our app server 
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log("Press ctrl+c to stop the server");

})