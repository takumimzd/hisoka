import { Module } from '@nestjs/common';
import { AppController } from '../practice/app.controller';
import { AppService } from '../practice/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from '../practice/item.module';
import { BookModule } from './module/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT),
      // username: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sakamo51',
      database: 'hisoka_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
