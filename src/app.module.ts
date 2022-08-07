import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controlers/products.controller';
import { CategoriesController } from './controlers/categories.controller';
import { OrderController } from './controlers/order.controller';
import { UserController } from './controlers/user.controller';
import { CustomerController } from './controlers/customer.controller';
import { BrandController } from './controlers/brand.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrderController, UserController, CustomerController, BrandController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
