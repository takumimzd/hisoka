import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookReq } from '../dto/book.dto';
import { Book } from '../entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  get() {
    return 'hoge';
  }

  create(book: BookReq) {
    return this.bookRepository.save(book);
  }
}
