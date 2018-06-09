import { Module } from '@appt/core';

@Module({
   declare: [      
      'ContactRouter',
      'ContactController',
      'ContactModel',
      'ContactSchema'
   ]
})
export class ContactModule {}