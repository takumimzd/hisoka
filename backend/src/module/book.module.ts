import { Module } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookController } from '../controller/book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../entity/book.entity';

@Module({
  controllers: [BookController],
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
})
export class BookModule {}
