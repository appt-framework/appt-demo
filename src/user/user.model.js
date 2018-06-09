import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

import { UserSchema } from './user.schema'
@Component({
   extend: {
      type: TModel,
      use: UserSchema
   }
})
export class UserModel {}