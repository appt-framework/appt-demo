import { Module } from '@appt/core';
import { TServer } from '@appt/api';
import { server } from '@appt/core/config';

@Module({
   extend: TServer(server.port),
   import: ['ContactModule', 'UserModule'],
   declare: ['MainDatabase', 'MainRouter']
})
export class MainModule {
   constructor(res){
      console.log(`Server running at ${res.config.port}`)
   }
}