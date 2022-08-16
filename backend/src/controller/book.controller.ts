import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookReq } from '../dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  getBook() {
    return this.bookService.get();
  }

  @Post('create')
  create(@Body() req: BookReq) {
    return this.bookService.create(req);
  }
}
