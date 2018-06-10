import { Component } from '@appt/core';

@Component()
export class MainUtils {
   constructor(){}

   getFullName(name, lastname){
      return name + ' ' + lastname;
   }
}