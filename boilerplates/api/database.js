import { Component, TDatabase } from "@appt/core";
import { Mongoose } from "@appt/mongoose";

@Component({
   extend: {
      type: TDatabase,
      use: Mongoose
   }
})
export class Database {}