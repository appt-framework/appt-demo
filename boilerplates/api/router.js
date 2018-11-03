import { Component } from "@appt/core";
import { TRouter } from "@appt/api";

@Component({
   extend: {
      type: TRouter,
      config: {
         path: '/v1'
      }
   }
})
export class Router {}