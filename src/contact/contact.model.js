import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

@Component({
   extend: TModel('ContactSchema')
})
export class ContactModel {}