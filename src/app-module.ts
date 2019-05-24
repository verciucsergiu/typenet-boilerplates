import { Module } from "@typenet/core";
import { ValuesController } from "./controllers/values.controller";

@Module({
    controllers: [
        ValuesController
    ]
})
export class AppModule { }