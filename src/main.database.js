import { Component, TDatabase } from '@appt/core';
import { Mongoose } from '@appt/mongoose';

@Component({
   extend: {
      type: TDatabase,
      use: Mongoose
   }
})
export class MainDatabase {
   constructor(config){
      console.log(`Database running at ${config.uri}`)
   }
}