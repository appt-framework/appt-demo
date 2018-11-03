import { Component } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@Component({
   extend: TSchema
})
export class ContactSchema {
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