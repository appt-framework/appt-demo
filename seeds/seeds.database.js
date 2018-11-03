import { Component, TDatabase } from '@appt/core';
import { database } from '@appt/core/config';
import { Mongoose } from '@appt/mongoose';

@Component({
   extend: TDatabase(Mongoose, database.uri, database.options)
})
export class SeedsDatabase {
   constructor(res){
      console.log(`Database running at ${res.config.uri}`)
   }
}