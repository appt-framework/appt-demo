import { Module, ApptBootstrap } from "@appt/core";
import { TServer } from "@appt/api";

@Module({
   extend: {
      type: TServer
   },
   declare: [
      "Router",
      "Database"
   ]
})
export class Server {
   constructor(config){
      console.log(`Server running at ${config.address.host}:${config.address.port}`);
   }
}

ApptBootstrap.module("Server");