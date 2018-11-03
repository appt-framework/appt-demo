import { Component } from '@appt/core';
import { TSchema, SchemaProperties } from '@appt/mongoose';

@Component({
  extend: TSchema,
  // inject: SchemaProperties
})
export class UserSchema {
  constructor(
  //   {
  //   asString,
  //   asNumber,
  //   asObjectId,
  //   asDate
  // }
  )
  {
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