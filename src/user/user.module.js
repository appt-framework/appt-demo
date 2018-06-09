import { Module } from '@appt/core';

import { UserRouter } from './user.router';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserSchema } from './user.schema';

@Module({
   declare: [      
      UserRouter,
      UserController,
      UserModel,
      UserSchema
   ]
})
export class UserModule {}