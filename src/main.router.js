import { Component } from '@appt/core';
import { TRouter } from '@appt/api';

import { ContactRouter } from './contact/contact.router';
import { UserRouter } from './user/user.router';

@Component({
   extend: TRouter('/api', {
      children: [ContactRouter, UserRouter]
   })
})
export class MainRouter {}