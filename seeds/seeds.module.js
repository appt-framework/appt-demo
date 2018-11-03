import { Module } from '@appt/core';

@Module({
   declare: ['SeedsDatabase']
})
export class SeedsModule {
   constructor(){
      console.log('Seeds Running!')
   }
}