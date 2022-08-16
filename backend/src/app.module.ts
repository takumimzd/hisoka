import { Module } from '@nestjs/common';
import { AppController } from '../practice/app.controller';
import { AppService } from '../practice/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './module/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER_NAME,
      password: process.env.USER_PASSWORD,
      database: process.env.USER_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
