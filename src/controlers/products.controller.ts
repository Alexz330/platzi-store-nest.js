import { Controller, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `products: \ limit => ${limit} offset => ${offset}`;
  }
}
