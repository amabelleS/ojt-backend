import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import config from "./config/keys"

@Module({
  imports: [TodosModule, MongooseModule.forRoot(config.mongoURI), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
