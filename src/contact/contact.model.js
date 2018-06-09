import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

@Component({
   extend: {
      type: TModel,
      use: ['ContactSchema']
   }
})
export class ContactModel {}