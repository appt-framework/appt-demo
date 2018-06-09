import { Component } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';

import { ContactRouter } from './contact/contact.router';
import { UserRouter } from './user/user.router';

@Component({
   extend: {
      type: TRouter,
      config: {
         path: '/api'
      },
      use: [
         ContactRouter,
         UserRouter
      ]
   }
})
export class MainRouter {
   constructor(){}
}