import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from '../service/book.service';
import { Book } from '../dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  getBook() {
    return this.bookService.get();
  }

  @Post('create')
  create(@Body() req: Book) {
    this.bookService.create(req);
  }
}
