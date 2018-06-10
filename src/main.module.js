import { 
   Module, 
   ApptBootstrap 
} from '@appt/core';

@Module({
   import: [
      'ContactModule',
      'UserModule'
   ],
   declare: [      
      'MainDatabase',
      'MainRouter',
      'MainUtils',
      'MainServer'
   ]
})
export class MainModule {}

ApptBootstrap.module('MainModule');