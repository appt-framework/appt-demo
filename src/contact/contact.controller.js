import { Component } from '@appt/core';
import { MongooseParse } from '@appt/mongoose';

@Component({
   inject: ['ContactModel']
})
export class ContactController {
   constructor(model){
      this.model = model;
   }

   getAll(){
      return this.model.find({})
   };

   getById(_id){
      return this.model.find({ _id: MongooseParse.ObjectId(_id)});
   }

   create(newContact){
      return this.model.create(newContact);
   }

   update(contact) {
      return this.model.update({
         _id: MongooseParse.ObjectId(contact._id)
      }, { 
         $set: contact 
      });
   }
   
   delete(_id) {
      return this.model.delete(req.params.id);
   }
   
}