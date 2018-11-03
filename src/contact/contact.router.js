import { Component } from '@appt/core';
import { auth } from '@appt/core/config';
import { TRouter } from '@appt/api';
import { Get, Post, Put, Delete } from '@appt/api/router';

@Component({
   extend: TRouter('/contact', { auth }),
   inject: 'ContactController'
})
export class ContactRouter {
   constructor(controller){
      this.controller = controller;
   }

   @Get('/')
   getAll(req, res, next){
      this.controller
         .getAll()
            .then(contacts => res.status(200).send(contacts))
            .catch(ex => res.status(500).send(ex));
   }

   @Get('/:id')
   getById(req, res, next){
      this.controller
         .getById(req.params.id)
            .then(contact => res.status(200).send(contact))
            .catch(ex => res.status(500).send(ex));
   }

   @Post('/')
   create(req, res, next){
      this.controller
         .create(req.body)
            .then(contact => res.status(200).send(contact))
            .catch(ex => res.status(500).send(ex));
   }

   @Put('/')
   update(req, res, next){
      this.controller
         .update(req.body)
            .then(contact => res.status(200).send(contact))
            .catch(ex => res.status(500).send(ex));
   }

   @Delete('/:id')
   delete(req, res, next){
      this.controller
         .delete(req.params.id)
            .then(contact => res.status(200).send(contact))
            .catch(ex => res.status(500).send(ex));
   }
}