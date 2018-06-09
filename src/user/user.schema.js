import { Component } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@Component({
   extend: {
      type: TSchema
   }
})
export class UserSchema {
   constructor(){
      this.name = {
         type: String,
         default: ""
      }

      this.email = {
         type: String,
         default: ""
      }
   }
}