import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/entities/item.entity';

@Module({
  controllers: [ItemController],
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService]
})
export class ItemModule {}
