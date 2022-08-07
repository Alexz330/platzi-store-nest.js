import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsSevice: ProductsService) {}

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: number) {
    return this.productsSevice.findOne(productId);
  }

  @Get()
  getProducts() {
    return this.productsSevice.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsSevice.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    console.log(id, payload);
    
    return this.productsSevice.update(id, payload);
  }
}
