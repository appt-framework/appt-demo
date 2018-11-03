import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

import { UserSchema } from './user.schema'

@Component({
  extend: TModel(UserSchema)
})
export class UserModel {
   constructor(){}
  
    static upsertByName(equipamento){
      return this.deepUpsert({
        nome: equipamento.nome 
      }, {
        $set: equipamento
      }, {
        $children: [{
          caracteristicas: 'descricao',
          $children: [{
            atributos: 'nome'
         }, {
            medidas: 'unidade',
            $children: [{
               rendimentos: 'unidade',              
            }]    
          }]    
        }]
      });
    }
}