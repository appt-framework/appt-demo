import { Component } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@Component({
   extend: {
      type: TSchema
   },
   inject: 'MainUtils'
})
export class UserSchema {
   constructor(utils){
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