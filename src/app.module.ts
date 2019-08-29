import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import config from './config';
import { CustomCorsMiddleware } from './custom-cors.middleware';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri, { useNewUrlParser: true }), ArticlesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CustomCorsMiddleware)
      .forRoutes('articles');
  }
}
