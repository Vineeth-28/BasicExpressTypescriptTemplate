// this file contains all the basic configuration  logic for the app server to work

import dotenv from 'dotenv';

type ServerConfig ={
    PORT:number;
} 

export function loadEnv(){
    dotenv.config();
    console.log("environment variables loaded");
}

loadEnv();
export const serverConfig:ServerConfig ={
    PORT :Number(process.env.PORT) ||3001
}

// this function loads the environment variables for the .env file
