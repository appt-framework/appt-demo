import { Component } from '@appt/core';

export class MainUtils {
   constructor(){}

   getFullName(name, lastname){
      return this.getTest();
   }

   static admin(req, res, next){
      console.log(req.user)
      next();
   }
}