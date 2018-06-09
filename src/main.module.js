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
      'MainServer'
   ]
})
export class MainModule {}

ApptBootstrap.module('MainModule');